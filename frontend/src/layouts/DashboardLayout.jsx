import Sidebar from "../components/dashboard/Sidebar";
import ChatPanel from "../components/chat/ChatPanel";
import PdfViewer from "../components/pdf/PdfViewer";
import RightPanel from "../components/dashboard/RightPanel";

export default function DashboardLayout({
  documents,
  loadDocuments,
}) {
  return (
    <div className="flex h-screen bg-slate-950 text-white">

      <Sidebar
        documents={documents}
        loadDocuments={loadDocuments}
      />

      <PdfViewer />

      <ChatPanel />

      <RightPanel />

    </div>
  );
}