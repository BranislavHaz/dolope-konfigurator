import { create } from "zustand";
import { devtools } from "zustand/middleware";

const newbornState = {
  size: "a4",
  indexImage: 0,
  name: "Janko Balej",
  date: "2023-03-15",
  time: "18:30",
  weight: 2.5,
  length: "50",
  text: "Lebo ťa strašne veľmi ľúbum. Tvoja babka ❤️",
  backgroundColor: "blue",
  mainColor: "blue",
  frame: true,
  font: "Amatic SC",
  menuActive: false,
  firstLoad: true,
  fullSeries: false,
};

export const useNewbornStore = create(
  devtools((set) => ({
    ...newbornState,
    setSize: (size) => set({ size }),
    setIndexImage: (indexImage) => set({ indexImage }),
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
    setMenuActive: (menuActive) => set({ menuActive }),
    setFirstLoad: (firstLoad) => set({ firstLoad }),
    setFullSeries: (fullSeries) => set({ fullSeries }),
    removeAll: () =>
      set({ name: "", date: "", time: "", weight: "", length: "" }),
  }))
);
