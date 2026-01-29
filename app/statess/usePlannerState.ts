import { create } from "zustand";
import { Plan } from "../types/types";

interface PlannerFunctions {
  setCountry: (newCountry: string) => void;
  setDateRange: (newDateRange: number) => void;
  setPlanDescription: (newPlanDescription: string) => void;
  resetForm: () => void;
}

type PlannerState = Plan & PlannerFunctions;

export const usePlannerState = create<PlannerState>((set) => ({
  country: "",
  dateRange: 0,
  planDescription: "",

  setCountry: (newCountry) => set({ country: newCountry }),
  setDateRange: (newDateRange) => set({ dateRange: newDateRange }),
  setPlanDescription: (newPlanDescription) =>
    set({ planDescription: newPlanDescription }),
  resetForm: () => set({ country: "", dateRange: 0 }),
}));
