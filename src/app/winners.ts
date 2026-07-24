import axios from "axios";
import axiosInstance from "./axios-config";
import { handleError } from "@/utils/handleError";

export const WinnersService = {
  getWinners: async (
    page: number = 1,
    limit: number = 10,
    sort?: "id" | "wins" | "time",
    order?: "ASC" | "DESC"
  ) => {
    try {
      const params: Record<string, string | number> = {
        _page: page,
        _limit: limit,
      };

      if (sort) params._sort = sort;
      if (order) params._order = order;

      const response = await axiosInstance.get(`/winners`, { params });

      const totalCount = Number(response.headers["x-total-count"] ?? 0);

      return {
        data: response.data,
        totalCount,
      };
    } catch (error) {
      handleError(error, "Failed to fetch winners");
    }
  },

  getWinner: async (id: number) => {
    try {
      const response = await axiosInstance.get(`/winners/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return null;
      }
      handleError(error, "Failed to fetch winner");
    }
  },

  createWinner: async (id: number, wins: number, time: number) => {
    try {
      const response = await axiosInstance.post("/winners", { id, wins, time });
      return response.data;
    } catch (error) {
      handleError(error, "Failed to create winner");
    }
  },

  deleteWinner: async (id: number) => {
    try {
      await axiosInstance.delete(`/winners/${id}`);
    } catch (error) {
      handleError(error, "Failed to delete winner");
    }
  },

  updateWinner: async (id: number, wins: number, time: number) => {
    try {
      const response = await axiosInstance.put(`/winners/${id}`, { wins, time });
      return response.data;
    } catch (error) {
      handleError(error, "Failed to update winner");
    }
  },
};