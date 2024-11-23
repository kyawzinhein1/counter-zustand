import { create } from "zustand";

type CounterStore = {
  count: number;
  imcrement: () => void;
  decrement: () => void;
  reset: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  imcrement: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decrement: () =>
    set((state) => ({
      count: state.count - 1,
    })),
  reset: () =>
    set((state) => ({
      count: (state.count = 0),
    })),
}));
