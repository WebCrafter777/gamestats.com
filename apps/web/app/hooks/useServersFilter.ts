import { create } from "zustand";

interface Props {
  category: string | null;
  name: string;
  hidefull: boolean;
  hideempty: boolean;
  anticheat: boolean;
  country:string | null,
  game: {
    id:string,
    name:string
  }| null 
  region:string | null,
  setData: (data: {
    category?: string | null;
    name?: string;
    hidefull?: boolean;
    hideempty?: boolean;
    anticheat?: boolean;
    country?:string,
    region?:string,
    game?: {
      id:string,
      name:string
    }| null 
  }) => void;
}

export const useServersFilter = create<Props>((set) => ({
  category: null,
  country:null,
  region:null,
  name: "",
  game: null,
  hidefull: false,
  hideempty: false,
  anticheat: false,
  setData: (data) => {
    set((prev) => ({
      ...prev,
      ...data,
    }));
  },
}));
