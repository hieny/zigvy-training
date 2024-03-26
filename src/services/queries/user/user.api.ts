import apiClient from "@/services/apiClient";
import { UserloginType } from "./user.type";

export const loginApi = async (
  userLogin: UserloginType
): Promise<{
  status: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}> => {
  const response = await apiClient.post("/authen/signin", {
    username: userLogin.userName,
    password: userLogin.passWord,
  });
  return response.data;
};

export const userLogoutApi = async () => {
  const response = await apiClient.post("/authen/logout");
  return response.data;
};
