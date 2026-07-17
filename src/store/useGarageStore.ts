import { create } from 'zustand';
import { GarageService } from '@/app/garage'; 
import type { Car } from '@/types/index'; 
interface GarageStore {
  cars: Car[];
  isLoading: boolean;
  fetchCars: () => Promise<void>;
  createCar: (name: string, color: string) => Promise<Car>;
  selectedCarId?: number | null;
  selectCar: (id: number | null) => void;
}

export const useGarageStore = create<GarageStore>((set) => ({
  cars: [],
  isLoading: false,
  selectedCarId: null,
  selectCar: (id) => set((state) => ({ 
  selectedCarId: state.selectedCarId === id ? null : id 
})),
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
  createCar: async (name: string, color: string) => {
    try {
      const newCar = await GarageService.CreateCar(name, color);
      set((state) => ({ cars: [...state.cars, newCar] }));
      return newCar;
    } catch (error) {
      console.error("Failed to create car:", error);
      throw error;
    }
  }
}));