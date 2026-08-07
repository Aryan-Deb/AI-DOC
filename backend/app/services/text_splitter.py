from langchain.text_splitter import RecursiveCharacterTextSplitter


class TextSplitterService:

    @staticmethod
    def split_text(text: str):

        splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len,
        )

        return splitter.split_text(text)