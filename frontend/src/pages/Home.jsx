import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/dashboard/Sidebar";
import DashboardLayout from "../layouts/DashboardLayout";
import { getDocuments } from "../services/documentService";

function Home() {
  const [documents, setDocuments] = useState([]);

  const loadDocuments = async () => {
    try {
      const data = await getDocuments();
      setDocuments(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  return (
    <>
      <Navbar />

      <DashboardLayout
        documents={documents}
        loadDocuments={loadDocuments}
      />
    </>
  );
}

export default Home;