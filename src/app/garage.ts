import axiosInstance from "@/app/axios-config";
import { handleError } from "@/utils/handleError";

export const GarageService = {
  getCars: async (page: number = 1, limit: number = 10) => {
    try {
      const response = await axiosInstance.get(`/garage`, {
        params: {
          _page: page,
          _limit: limit,
        },
      });

      const totalCount = Number(response.headers["x-total-count"] ?? 0);

      return {
        data: response.data,
        totalCount,
      };
    } catch (error) {
      handleError(error, "Failed to fetch cars");
    }
  },
  CreateCar: async (name: string, color: string) => {
    try {
      const response = await axiosInstance.post('/garage', { name, color });
      return response.data;
    } catch (error) {
      handleError(error, "Failed to create car");
    }
  },
  UpdateCar: async (id: number, name: string, color: string) => {
    try {
      const response = await axiosInstance.put(`/garage/${id}`, { name, color });
      return response.data;
    } catch (error) {
      handleError(error, "Failed to update car");
    }
  },
  DeleteCar: async (id: number) => {
    try {
      await axiosInstance.delete(`/garage/${id}`);
    } catch (error) {
      handleError(error, "Failed to delete car");
    }
  },
};


