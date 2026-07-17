import axiosInstance from "@/app/axios-config";

export const EngineService = {
  startEngine: async (id: number) => {
    try {
      const response = await axiosInstance.patch(
        `/engine?id=${id}&status=started`,
      );
      return response.data;
    } catch (error) {
      console.error("Error starting engine:", error);
      throw error;
    }
  },
  stopEngine: async (id: number) => {
    try {
      const response = await axiosInstance.patch(
        `/engine?id=${id}&status=stopped`,
      );
      return response.data;
    } catch (error) {
      console.error("Error stopping engine:", error);
      throw error;
    }
  },
  driveEngine: async (id: number) => {
    try {
      const response = await axiosInstance.patch(
        `/engine?id=${id}&status=drive`,
      );
      return response.data;
    } catch (error) {
      console.error("Error driving engine:", error);
      throw error;
    }
  },
};
