import { create } from "zustand";

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const useGameSearchInput = create<Props>((set) => ({
  value: "",
  onChange: (val) => {
    set({ value: val });
  },
}));
