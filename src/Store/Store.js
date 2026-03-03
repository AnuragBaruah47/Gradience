import { create } from "zustand";


export const useStore = create((set) => ({
  style: null,

  setStyle: (newStyle) => set({ style: newStyle }),

  clearStyle: () => set({ style: null }),
}));