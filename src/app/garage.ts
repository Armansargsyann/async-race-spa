import axiosInstance from "@/app/axios-config";

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
  UpdateCar: async (id: number, name: string, color: string) => {
    try {
      const response = await axiosInstance.put(`/garage/${id}`, { name, color });
      return response.data;
    } catch (error) {
      console.error("Error updating car:", error);
      throw error;
    }
  },
  DeleteCar: async (id: number) => {
    try {
      await axiosInstance.delete(`/garage/${id}`);
    } catch (error) {
      console.error("Error deleting car:", error);
      throw error;
    }
  },
};


