import { create } from "zustand";

export const styleStore = create((set) => ({
  style: null,

  setStyle: (newStyle) => set({ style: newStyle }),

  clearStyle: () => set({ style: null }),
}));
export const themeStore = create((set) => ({
  darkTheme: false,

  setTheme: (value) =>
    set({
      darkTheme: value,
    }),
}));
export const copyStore = create((set) => ({
  copy: false,

  setCopy: (value) =>
    set({
      copy: value,
    }),
}));