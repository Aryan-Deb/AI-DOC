from app.services.llm import llm_service


class SummaryService:

    @staticmethod
    def summarize(text):

        prompt = f"""
Create a professional document summary.

Include:

Executive Summary

Key Topics

Important Information

Keep it concise.

{text}
"""

        return llm_service.client.models.generate_content(
            model="gemini-flash-latest",
            contents=prompt,
        ).text