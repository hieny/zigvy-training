import apiClient from "@/services/apiClient";
import { UserSignUpType, UserloginType } from "./user.type";

export const loginApi = async (
  userLogin: UserloginType
): Promise<{
  status: boolean;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}> => {
  const response = await apiClient.post("/authentication/signin", {
    username: userLogin.username,
    password: userLogin.password,
  });
  return response.data;
};

export const userLogoutApi = async () => {
  const response = await apiClient.post("/authentication/logout");
  return response.data;
};

export const userSignUpApi = async (userSignUp: UserSignUpType) => {
  return await apiClient.post("/authentication/signup", userSignUp);
};

export const getAllUsers = async () => {
  const response = await apiClient.get("/user");
  console.log("1111", response)
  return response.data;
};
