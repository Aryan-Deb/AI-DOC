import useDocumentStore from "../../store/documentStore";

const { setSelectedPdf } = useDocumentStore();

documents.map((doc) => (
  <div
    key={doc.id}
    onClick={() =>
      setSelectedPdf(
        `http://127.0.0.1:8000/uploads/${doc.filename}`
      )
    }
    className="mb-3 cursor-pointer rounded-xl bg-slate-800 p-4 hover:bg-slate-700"
  >
    <p className="font-medium">{doc.filename}</p>
    <p className="text-xs text-slate-400">
      {doc.pages} pages
    </p>
  </div>
));