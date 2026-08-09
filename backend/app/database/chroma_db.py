from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

_vector_store = None


def get_vector_store():
    global _vector_store

    if _vector_store is None:
        embedding_model = HuggingFaceEmbeddings(
            model_name="sentence-transformers/all-MiniLM-L6-v2"
        )

        _vector_store = Chroma(
            persist_directory="chroma_db",
            embedding_function=embedding_model,
        )

    return _vector_store