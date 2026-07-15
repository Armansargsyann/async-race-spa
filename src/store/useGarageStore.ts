import { create } from 'zustand';
import { GarageService } from '@/app/garage'; 
import type { Car } from '@/types/index'; 
interface GarageStore {
  cars: Car[];
  isLoading: boolean;
  fetchCars: () => Promise<void>;
  
}

export const useGarageStore = create<GarageStore>((set) => ({
  cars: [],
  isLoading: false,

  fetchCars: async () => {
    set({ isLoading: true });
    try {
      const data = await GarageService.getCars();
      set({ cars: data, isLoading: false });
    } catch (error) {
      console.error("Failed to fetch cars:", error);
      set({ isLoading: false });
    }
  },
}));