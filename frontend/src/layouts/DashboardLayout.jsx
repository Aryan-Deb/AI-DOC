import Sidebar from "../components/dashboard/Sidebar";
import ChatPanel from "../components/chat/ChatPanel";
import PdfViewer from "../components/pdf/PdfViewer";
import RightPanel from "../components/dashboard/RightPanel";

export default function DashboardLayout({
  documents,
  loadDocuments,
}) {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">

      <div className="flex h-full p-5 gap-5">

        {/* Sidebar */}
        <div className="w-72 shrink-0">
          <Sidebar
            documents={documents}
            loadDocuments={loadDocuments}
          />
        </div>

        {/* Center */}
        <div className="flex flex-1 gap-5">

          {/* Chat */}
          <div className="flex-[1.2]">
            <ChatPanel />
          </div>

          {/* PDF */}
          <div className="flex-1">
            <PdfViewer />
          </div>

        </div>

        {/* AI Insights */}
        <div className="w-80 shrink-0">
          <RightPanel />
        </div>

      </div>

    </div>
  );
}