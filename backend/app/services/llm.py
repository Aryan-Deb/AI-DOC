from google import genai
import time
from app.config import GOOGLE_API_KEY


class LLMService:
    def __init__(self):
        self.client = genai.Client(api_key=GOOGLE_API_KEY)

    def generate_answer(
        self,
        question: str,
        context: str,
        conversation: str = "",
    ):

        prompt = f"""
You are CogniDoc AI, an advanced AI Document Intelligence Assistant.

==========================
CONVERSATION HISTORY
==========================

{conversation}

==========================
DOCUMENT CONTEXT
==========================

{context}

==========================
QUESTION
==========================

{question}

==========================
RULES
==========================

1. Answer ONLY using the document context.
2. Never invent or assume facts.
3. If the answer isn't present, reply:
"I couldn't find that information in the uploaded document."
4. Use Markdown.
5. Use headings and bullet points when appropriate.
6. Keep the answer concise and professional.
7. If multiple sources support the answer, combine them naturally.

==========================
ANSWER
==========================
"""

        for attempt in range(3):

            try:

                response = self.client.models.generate_content(
                    model="gemini-flash-latest",
                    contents=prompt,
                )

                if response.text:
                    return response.text

            except Exception as e:

                print(f"[Gemini Attempt {attempt+1}] {e}")

                time.sleep(2)

        return (
            "⚠️ Gemini is temporarily unavailable. "
            "Please try again."
        )

    def summarize_document(self, text: str):

        prompt = f"""
Generate a concise professional summary.

Format:

# Summary

## Key Points

## Important Information

## Conclusion

Document:

{text}
"""

        try:

            response = self.client.models.generate_content(
                model="gemini-flash-latest",
                contents=prompt,
            )

            return response.text

        except Exception:

            return "Summary generation failed."

    def generate_keywords(self, text: str):

        prompt = f"""
Extract the 10 most important keywords.

Return ONLY comma separated keywords.

{text}
"""

        try:

            response = self.client.models.generate_content(
                model="gemini-flash-latest",
                contents=prompt,
            )

            return response.text

        except Exception:

            return ""

    def suggested_questions(self, text: str):

        prompt = f"""
Generate five intelligent questions a user may ask about this document.

Return ONLY the questions.

{text}
"""

        try:

            response = self.client.models.generate_content(
                model="gemini-flash-latest",
                contents=prompt,
            )

            return response.text

        except Exception:

            return ""

    def generate_title(self, question: str):

        prompt = f"""
Generate a short conversation title (maximum 5 words).

Question:

{question}

Return only the title.
"""

        try:

            response = self.client.models.generate_content(
                model="gemini-flash-latest",
                contents=prompt,
            )

            return response.text

        except Exception:

            return "New Chat"


llm_service = LLMService()