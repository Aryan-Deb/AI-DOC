import json

from app.database.chroma_db import vector_store
from app.database.keyword_search import keyword_search
from app.database.redis_db import redis_client

from app.services.llm import llm_service

from app.database.session import SessionLocal
from app.models.message import Message


class RAGService:

    @staticmethod
    def ask(
        question: str,
        document: str = None,
        conversation_id: str = None,
    ):

        # ---------------------------------
        # Redis Cache
        # ---------------------------------

        cache_key = f"{document}:{question}"

        try:
            cached = redis_client.get(cache_key)

            if cached:
                print("⚡ Redis Cache Hit")
                return json.loads(cached)

        except Exception as e:
            print("Redis Error:", e)

        print("🤖 Gemini Processing")

        # ---------------------------------
        # Conversation History
        # ---------------------------------

        conversation = ""

        if conversation_id:

            db = SessionLocal()

            history = (
                db.query(Message)
                .filter(
                    Message.conversation_id == conversation_id
                )
                .order_by(Message.id.desc())
                .limit(6)
                .all()
            )

            db.close()

            history.reverse()

            conversation = "\n".join(
                f"{msg.role}: {msg.content}"
                for msg in history
            )

        # ---------------------------------
        # Vector Search
        # ---------------------------------

        if document:

            vector_docs = vector_store.similarity_search(
                query=question,
                k=5,
                filter={
                    "source": document
                },
            )

        else:

            vector_docs = vector_store.similarity_search(
                query=question,
                k=5,
            )

        # ---------------------------------
        # BM25 Search
        # ---------------------------------

        keyword_results = keyword_search.search(
            query=question,
            k=5,
        )

        # ---------------------------------
        # Merge Results
        # ---------------------------------

        combined_docs = []

        seen = set()

        # Vector Results
        for doc in vector_docs:

            if doc.page_content in seen:
                continue

            combined_docs.append(
                {
                    "text": doc.page_content,
                    "metadata": doc.metadata,
                }
            )

            seen.add(doc.page_content)

        # Keyword Results
        for item in keyword_results:

            if item["text"] in seen:
                continue

            if document:
                if item["metadata"]["source"] != document:
                    continue

            combined_docs.append(item)

            seen.add(item["text"])

        # ---------------------------------
        # No Results
        # ---------------------------------

        if not combined_docs:

            return {
                "answer": "No relevant information found.",
                "sources": [],
            }

        # ---------------------------------
        # Build Context
        # ---------------------------------

        context = "\n\n".join(
            item["text"]
            for item in combined_docs
        )

        # ---------------------------------
        # Generate AI Answer
        # ---------------------------------

        answer = llm_service.generate_answer(
            question=question,
            context=context,
            conversation=conversation,
        )

        # ---------------------------------
        # Build Sources
        # ---------------------------------

        sources = []

        added = set()

        for item in combined_docs:

            metadata = item["metadata"]

            source = metadata.get("source", "Unknown")
            page = metadata.get("page")
            chunk = metadata.get("chunk")

            key = (source, page, chunk)

            if key in added:
                continue

            added.add(key)

            sources.append(
                {
                    "document": source,
                    "page": page,
                    "chunk": chunk,
                }
            )

        # ---------------------------------
        # Final Result
        # ---------------------------------

        result = {
            "answer": answer,
            "sources": sources,
        }

        # ---------------------------------
        # Save to Redis
        # ---------------------------------

        try:
            redis_client.setex(
                cache_key,
                3600,  # 1 hour
                json.dumps(result),
            )
        except Exception as e:
            print("Redis Error:", e)

        return result