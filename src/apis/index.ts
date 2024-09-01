import axios from "axios";

export const baseInstance = axios.create({
  baseURL: import.meta.env.VITE_API_HOST
});
