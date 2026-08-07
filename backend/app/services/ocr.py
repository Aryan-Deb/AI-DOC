import os
import fitz
import easyocr

_reader = None


def get_reader():
    global _reader

    if _reader is None:
        _reader = easyocr.Reader(["en"], gpu=False)

    return _reader


class OCRService:

    @staticmethod
    def extract_text(pdf_path):

        reader = get_reader()

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
                "text": text,
            })

        return pages