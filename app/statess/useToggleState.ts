import { create } from "zustand";
import { Toggles } from "../types/types";

interface ToggleFunctions {
  toggleTable: () => void;
}

type ToggleState = {
  toggle: Toggles;
  toggleFunctions: ToggleFunctions;
};

export const useToggleState = create<ToggleState>((set) => ({
  toggle: {
    showTable: false,
  },
  toggleFunctions: {
    toggleTable: () =>
      set((state) => ({
        toggle: { showTable: true },
      })),
  },
}));
