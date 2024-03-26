// useUserLogin.ts

import token from "@/lib/token";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { loginApi, userLogoutApi } from "./user.api";

export const useUserLogin = () =>
  useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      token.setToken(response.data.accessToken);
      token.setRefreshToken(response.data.refreshToken)
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
