import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

import useDocumentStore from "../../store/documentStore";

import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export default function PdfViewer() {

  const {
    selectedPdf,
    currentPage,
    setTotalPages,
  } = useDocumentStore();

  if (!selectedPdf)
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-950 text-slate-500">
        Upload a PDF
      </div>
    );

  return (
    <div className="flex-1 overflow-auto p-8 bg-slate-900">

      <Document
        file={selectedPdf}
        onLoadSuccess={({ numPages }) =>
          setTotalPages(numPages)
        }
      >

        <Page
          pageNumber={currentPage}
          width={900}
        />

      </Document>

    </div>
  );
}