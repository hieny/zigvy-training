import axios, { AxiosError } from "axios";
import token from "@/lib/token";
import { refreshToken } from "./queries/common/common.api";

// const host = import.meta.env.VITE_URL
const host = "http://127.0.0.1:3000/";

const apiClient = axios.create({
  baseURL: host,
});

apiClient.interceptors.request.use((request) => {
  const jwtToken: string | null = token.getToken();

  if (jwtToken) {
    request.headers["Authorization"] = `Bearer ${jwtToken}`;
  }
  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const status = error.response?.status;
    if (status === 401) {
      const response = await refreshToken();
      if (response.status === 200) {
        token.setToken(response.data.data.accessToken);
        token.setRefreshToken(response.data.data.refreshToken);
      }
      if (response.status === 403) {
        alert("Your login session has expired! Please login agin");
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

