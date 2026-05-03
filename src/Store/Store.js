import { create } from "zustand";

export const styleStore = create((set) => ({
  style: null,
  id: null,
  setStyle: (newStyle) => set({ style: newStyle }),
  setId: (newId) => set({ id: newId }),
  clearStyle: () => set({ style: null }),
}));

export const themeStore = create((set) => ({

  darkTheme: JSON.parse(localStorage.getItem("theme") ?? "false"),


  prevTheme: localStorage.getItem("prevTheme") !== null
    ? JSON.parse(localStorage.getItem("prevTheme"))
    : null,

  setTheme: (value) => {
    localStorage.setItem("theme", JSON.stringify(value));
    set({ darkTheme: value });
  },

  setPreviewTheme: (value) => {
    set({ darkTheme: value });
  },


  savePrevTheme: (value) => {
    localStorage.setItem("prevTheme", JSON.stringify(value));
    set({ prevTheme: value });
  },

  clearPrevTheme: () => {
    localStorage.removeItem("prevTheme");
    set({ prevTheme: null });
  },
}));
