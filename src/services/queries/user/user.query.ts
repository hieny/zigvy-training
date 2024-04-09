// useUserLogin.ts

import token from "@/lib/token";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import {
  getAllUsers,
  loginApi,
  userLogoutApi,
  userSignUpApi,
} from "./user.api";

export const useUserLogin = () =>
  useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      token.setToken(response.data.accessToken);
      token.setRefreshToken(response.data.refreshToken);
    },
    onError: (
      err: AxiosError<{ message: string; error: string; statusCode: number }>
    ) => {
      return err;
    },
  });

export const useUserLogout = () =>
  useMutation({
    mutationFn: userLogoutApi,
    onSuccess: () => {
      token.removeToken();
    },
  });

export const useUserSignUp = () =>
  useMutation({
    mutationFn: userSignUpApi,
  });

export const useGetAllUsers = () =>
  useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      console.log("22222")
      return await getAllUsers();
    },
  });
