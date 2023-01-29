import { create } from "zustand";
import { devtools } from "zustand/middleware";

const newbornState = {
  name: "Charlotte Házová",
  date: "2003-12-15",
  time: "18:30",
  weight: 2.5,
  length: "50",
  text: "Lebo ťa strašne veľmi ľúbum. Tvoja babka.",
  backgroundColor: "blue",
  mainColor: "blue",
  frame: true,
  font: "Amatic SC",
};

export const useNewbornStore = create(
  devtools((set) => ({
    ...newbornState,
    setName: (name) => set({ name }),
    setDate: (date) => set({ date }),
    setTime: (time) => set({ time }),
    setWeight: (weight) => set({ weight }),
    setLength: (length) => set({ length }),
    setText: (text) => set({ text }),
    setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
    setMainColor: (mainColor) => set({ mainColor }),
    setFrame: (frame) => set({ frame }),
    setFont: (font) => set({ font }),
    removeAll: () =>
      set({ name: "", date: "", time: "", weight: "", length: "" }),
  }))
);
