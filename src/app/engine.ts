import axiosInstance from "@/app/axios-config";
import { handleError } from "@/utils/handleError";

export const EngineService = {
  startEngine: async (id: number) => {
    try {
      const response = await axiosInstance.patch(
        `/engine?id=${id}&status=started`,
      );
      return response.data;
    } catch (error) {
      handleError(error, "Failed to start engine");
    }
  },
  stopEngine: async (id: number) => {
    try {
      const response = await axiosInstance.patch(
        `/engine?id=${id}&status=stopped`,
      );
      return response.data;
    } catch (error) {
      handleError(error, "Failed to stop engine");
    }
  },
  driveEngine: async (id: number) => {
    try {
      const response = await axiosInstance.patch(
        `/engine?id=${id}&status=drive`,
      );
      return response.data;
    } catch (error) {
      handleError(error, "Failed to drive engine");
    }
  },
};
