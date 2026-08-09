class TextSplitterService:

    @staticmethod
    def split_text(text: str):

        chunk_size = 1000
        chunk_overlap = 200

        if not text:
            return []

        chunks = []

        start = 0
        text_length = len(text)

        while start < text_length:

            end = start + chunk_size

            chunk = text[start:end]

            if chunk.strip():
                chunks.append(chunk)

            if end >= text_length:
                break

            start = end - chunk_overlap

        return chunks