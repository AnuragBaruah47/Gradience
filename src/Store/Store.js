import { create } from "zustand";

export const styleStore = create((set) => ({
  style: null,

  setStyle: (newStyle) => set({ style: newStyle }),

  clearStyle: () => set({ style: null }),
}));
export const themeStore = create((set) => ({
  darkTheme: false,

  setTheme: () =>
    set((state) => ({
      darkTheme: state,
    })),
}));
