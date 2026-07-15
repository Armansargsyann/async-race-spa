import axiosInstance from "./axios-config";

export const GarageService = {
  getCars: async () => {
    try {
      const response = await axiosInstance.get("/garage");
      return response.data;
    } catch (error) {
      console.error("Error fetching cars:", error);
      throw error;
    }
  },
};
