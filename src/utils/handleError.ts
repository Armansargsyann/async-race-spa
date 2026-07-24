import axios from "axios";

export const handleApiError = (error: unknown, defaultMessage: string): never => {
  if (axios.isAxiosError(error)) {
    throw new Error(error.response?.data?.message || error.message);
  }
  throw new Error(defaultMessage);
};