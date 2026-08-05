from rank_bm25 import BM25Okapi


class KeywordSearch:

    def __init__(self):
        self.documents = []
        self.metadata = []
        self.bm25 = None

    def add_documents(self, docs):

        for doc in docs:
            self.documents.append(doc.page_content)
            self.metadata.append(doc.metadata)

        tokenized = [
            d.lower().split()
            for d in self.documents
        ]

        self.bm25 = BM25Okapi(tokenized)

    def search(self, query, k=5):

        if not self.bm25:
            return []

        scores = self.bm25.get_scores(
            query.lower().split()
        )

        ranked = sorted(
            enumerate(scores),
            key=lambda x: x[1],
            reverse=True
        )

        results = []

        for index, score in ranked[:k]:

            results.append({
                "text": self.documents[index],
                "metadata": self.metadata[index],
                "score": score
            })

        return results


keyword_search = KeywordSearch()