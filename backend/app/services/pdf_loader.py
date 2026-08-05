from pypdf import PdfReader
from app.services.ocr import OCRService


class PDFLoaderService:

    @staticmethod
    def extract_pages(file_path):

        reader = PdfReader(file_path)

        if reader.is_encrypted:
            reader.decrypt("")

        pages = []

        extracted_text = ""

        for page_number, page in enumerate(reader.pages, start=1):

            text = page.extract_text() or ""

            extracted_text += text

            pages.append({
                "page": page_number,
                "text": text
            })

        # Automatic OCR
        if len(extracted_text.strip()) < 150:

            print("Scanned PDF detected.")
            print("Switching to OCR...")

            return OCRService.extract_text(file_path)

        return pages