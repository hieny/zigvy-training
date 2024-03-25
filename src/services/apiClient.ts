import axios from "axios";
import token from "@/lib/token";

// const host = import.meta.env.BASE_URL
const host = "http://127.0.0.1:3000/"

const apiClient = axios.create({
  baseURL: host,
});

apiClient.interceptors.request.use((request) => {
  const jwtToken: string | null = token.getToken(token.getTokenKey());

  if (jwtToken) {
    request.headers["Authorization"] = `Bearer ${jwtToken}`;
  }
  return request;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
