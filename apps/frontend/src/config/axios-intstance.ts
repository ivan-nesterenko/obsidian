import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NX_PUBLIC_API_URL,
});
