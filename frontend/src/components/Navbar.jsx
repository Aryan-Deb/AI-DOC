function Navbar() {
  return (
    <div className="h-16 border-b border-slate-700 flex items-center justify-between px-6">
      <h1 className="text-xl font-bold">
        🤖 AI Document Intelligence
      </h1>

      <div className="text-sm text-gray-400">
        FastAPI • Gemini • ChromaDB
      </div>
    </div>
  );
}

export default Navbar;