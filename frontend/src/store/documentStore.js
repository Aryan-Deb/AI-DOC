import { create } from "zustand";

const useDocumentStore = create((set) => ({
  selectedPdf: null,
  currentPage: 1,
  totalPages: 0,

  setSelectedPdf: (pdf) =>
    set({ selectedPdf: pdf }),

  setCurrentPage: (page) =>
    set({ currentPage: page }),

  setTotalPages: (pages) =>
    set({ totalPages: pages }),
}));

export default useDocumentStore;