import token from "@/lib/token";
import axios, { AxiosError } from "axios";

export const refreshToken = async () => {
  return await axios
    .get("http://127.0.0.1:3000/authen/refresh", {
      headers: {
        Authorization: `Bearer ${token.getRefreshToken()}`,
      },
    })
    .then((data) => {
      return {
        status: 200,
        data: data.data,
      };
    })
    .catch((err: AxiosError) => {
      return {
        status: err.response?.status,
        data: "",
      };
    });
};

 