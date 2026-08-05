import { useState } from "react";
import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

import {
  ZoomIn,
  ZoomOut,
  ChevronLeft,
  ChevronRight,
  Download,
  Maximize2,
  FileText,
} from "lucide-react";

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
    totalPages,
    setCurrentPage,
    setTotalPages,
  } = useDocumentStore();

  const [scale, setScale] = useState(1.2);
    if (!selectedPdf) {
    return (
      <div className="flex flex-1 items-center justify-center bg-slate-950">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-12 text-center backdrop-blur-xl">

          <FileText
            size={70}
            className="mx-auto text-slate-600"
          />

          <h2 className="mt-6 text-2xl font-bold text-white">

            No PDF Selected

          </h2>

          <p className="mt-3 text-slate-400">

            Upload or select a document to start.

          </p>

        </div>

      </div>
    );
  }

  return (

    <div className="flex flex-1 flex-col bg-slate-950">

      {/* Toolbar */}

      <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-900/70 px-6 py-4 backdrop-blur-xl">

        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              setCurrentPage(
                Math.max(1, currentPage - 1)
              )
            }
            className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
          >

            <ChevronLeft size={20} />

          </button>

          <button
            onClick={() =>
              setCurrentPage(
                Math.min(totalPages, currentPage + 1)
              )
            }
            className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
          >

            <ChevronRight size={20} />

          </button>

          <div className="rounded-xl bg-white/5 px-5 py-3 font-semibold">

            {currentPage} / {totalPages || "--"}

          </div>

        </div>

        <div className="flex items-center gap-3">

          <button
            onClick={() =>
              setScale((s) =>
                Math.max(0.6, s - 0.2)
              )
            }
            className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
          >

            <ZoomOut size={20} />

          </button>

          <div className="rounded-xl bg-white/5 px-4 py-3">

            {(scale * 100).toFixed(0)}%

          </div>

          <button
            onClick={() =>
              setScale((s) =>
                Math.min(3, s + 0.2)
              )
            }
            className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
          >

            <ZoomIn size={20} />

          </button>

          <a
            href={selectedPdf}
            download
            className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
          >

            <Download size={20} />

          </a>

          <button
            onClick={() =>
              document.documentElement.requestFullscreen()
            }
            className="rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
          >

            <Maximize2 size={20} />

          </button>

        </div>

      </div>

      {/* PDF */}

      <div className="flex flex-1 justify-center overflow-auto p-8">

        <div className="rounded-3xl border border-white/10 bg-white p-6 shadow-2xl">

          <Document
            file={selectedPdf}
            loading={
              <div className="p-16 text-center">

                <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-cyan-500 border-t-transparent" />

                <p className="mt-5 text-slate-500">

                  Loading PDF...

                </p>

              </div>
            }
            onLoadSuccess={({ numPages }) =>
              setTotalPages(numPages)
            }
          >

            <Page
              pageNumber={currentPage}
              scale={scale}
              renderAnnotationLayer
              renderTextLayer
            />

          </Document>

        </div>

      </div>

    </div>

  );

}