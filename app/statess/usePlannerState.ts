import { create } from "zustand";
import { Plan } from "../types/types";

interface PlannerFunctions {
  setCountry: (newCountry: string) => void;
  setDateRange: (newDateRange: number) => void;
  setPlanDescription: (newPlanDescription: string) => void;
  resetForm: () => void;
}

type PlannerState = { plan: Plan;
  plannerFunctions: PlannerFunctions;
 };

export const usePlannerState = create<PlannerState>((set) => ({
  plan: {
    country: "",
    dateRange: 0,
    planDescription: "",
  },

  plannerFunctions: { 
  
    setCountry: (newCountry) =>
      set((state) => ({
        plan: { ...state.plan, country: newCountry },
      })),
    setDateRange: (newDateRange) =>
      set((state) => ({
        plan: { ...state.plan, dateRange: newDateRange },
      })),
    setPlanDescription: (newPlanDescription) =>
      set((state) => ({
        plan: { ...state.plan, planDescription: newPlanDescription },
      })),
    resetForm: () =>
      set({
        plan: { country: "", dateRange: 0, planDescription: "" },
      }),
    }
}));
