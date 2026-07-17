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
  updateCar: (id: number, updatedData: { name: string; color: string }) => Promise<void>;
  removeCar: (id: number) => Promise<void>;
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
  },
  updateCar: async (id: number, updatedData: { name: string; color: string }) => {
    try {
      const updatedCar = await GarageService.UpdateCar(id, updatedData.name, updatedData.color);
      set((state) => ({
        cars: state.cars.map((car) => (car.id === id ? updatedCar : car)),
      }));
      return updatedCar;
    } catch (error) {
      console.error("Failed to update car:", error);
      throw error;
    }
  },  
  removeCar: async (id: number) => {
    try {
      await GarageService.DeleteCar(id);
      set((state) => ({ 
        cars: state.cars.filter((car) => car.id !== id),
        selectedCarId: state.selectedCarId === id ? null : state.selectedCarId 
      }));
    } catch (error) {
      console.error("Failed to remove car:", error);
      throw error;
    }
  },
}));