from langchain_core.documents import Document

from app.database.chroma_db import vector_store


class EmbeddingService:

    @staticmethod
    def save_chunks(chunks, filename, page, document_id):
        """
        Save text chunks into ChromaDB with metadata.

        Args:
            chunks (list[str]): List of text chunks.
            filename (str): Original PDF filename.
            page (int): Page number.
            document_id (str): Unique document ID.

        Returns:
            int: Number of stored chunks.
        """

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
            vector_store.add_documents(documents)

            # Persist only if your Chroma version supports it
            if hasattr(vector_store, "persist"):
                vector_store.persist()

        return len(documents)