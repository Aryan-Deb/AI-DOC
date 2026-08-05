import fitz
import easyocr
import os

reader = easyocr.Reader(["en"], gpu=False)


class OCRService:

    @staticmethod
    def extract_text(pdf_path):

        document = fitz.open(pdf_path)

        pages = []

        os.makedirs("temp", exist_ok=True)

        for page_number in range(len(document)):

            page = document.load_page(page_number)

            pix = page.get_pixmap(dpi=300)

            image_path = f"temp/page_{page_number+1}.png"

            pix.save(image_path)

            result = reader.readtext(
                image_path,
                detail=0
            )

            text = "\n".join(result)

            pages.append({
                "page": page_number + 1,
                "text": text
            })

        return pages