import { useRef } from "react";
import { uploadDocument } from "../services/documentService";
import { getDocuments } from "../services/documentService";
import useDocumentStore from "../store/documentStore";

function UploadButton({ setDocuments }) {
  const fileRef = useRef();

  const { setSelectedPdf } = useDocumentStore();

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      const res = await uploadDocument(file);

      // Refresh sidebar
      const docs = await getDocuments();

      setDocuments(docs);

      // Automatically open uploaded PDF
      setSelectedPdf(
        `http://127.0.0.1:8000/uploads/${res.filename}`
      );

      alert(`${res.filename} uploaded successfully!`);

      // Clear input so the same file can be selected again
      e.target.value = "";
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    }
  };

  return (
    <>
      <button
        onClick={() => fileRef.current.click()}
        className="w-full rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-700"
      >
        + Upload PDF
      </button>

      <input
        ref={fileRef}
        type="file"
        accept=".pdf"
        hidden
        onChange={handleUpload}
      />
    </>
  );
}

export default UploadButton;