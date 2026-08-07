from langchain_core.documents import Document
from app.database.chroma_db import get_vector_store


class EmbeddingService:

    @staticmethod
    def save_chunks(chunks, filename, page, document_id):

        documents = []

        for index, chunk in enumerate(chunks):

            document = Document(
                page_content=chunk,
                metadata={
                    "document_id": document_id,
                    "source": filename,
                    "page": page,
                    "chunk": index,
                },
            )

            documents.append(document)

        if documents:

            # Lazy initialize Chroma
            vector_store = get_vector_store()

            vector_store.add_documents(documents)

            if hasattr(vector_store, "persist"):
                vector_store.persist()

        return len(documents)