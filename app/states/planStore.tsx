import { create } from "zustand";
import { Plan } from "../types/types";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

interface PlanState{
    plan: Plan;
    onSubmit: () => void;
}

const usePlanStore = create<PlanState>((set) => ({
    plan: {
        country: "",
        dateRange: 0,
        planDescription: ""
    },

    onSubmit: () => {console.log("Submitted")}
})

)

// export default useCounterStore;
export default usePlanStore;