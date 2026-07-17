import axiosInstance from "./axios-config";

export const GarageService = {
  getCars: async (page: number = 1, limit: number = 10) => {
    try {
      const response = await axiosInstance.get(`/garage?_page=${page}&_limit=${limit}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching cars:", error);
      throw error;
    }
  },
  CreateCar: async (name: string, color: string) => {
    try {
      const response = await axiosInstance.post('/garage', { name, color });
      return response.data;
    } catch (error) {
      console.error("Error creating car:", error);
      throw error;
    }
  },
};
