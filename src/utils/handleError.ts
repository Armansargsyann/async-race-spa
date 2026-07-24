import axios from "axios";

export const handleError = (error: unknown, defaultMessage: string): never => {
  if (axios.isAxiosError(error)) {
    throw new Error(error.response?.data?.message || error.message);
  }
  throw new Error(defaultMessage);
};

export { handleError as handleApiError };