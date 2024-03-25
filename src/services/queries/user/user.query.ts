// useUserLogin.ts

import { useMutation, useQuery } from "@tanstack/react-query";
import { loginApi, useLogout } from "./user.api";
import token from "@/lib/token";
import { AxiosError } from "axios";

export const useUserLogin = () =>
  useMutation({
    mutationFn: loginApi,
    onSuccess: (response) => {
      token.setToken(response.data.accessToken);
    },
    onError: (
      err: AxiosError<{ message: string; error: string; statusCode: number }>
    ) => {
      return err;
    },
  });

  export const useUserLogout = () => {
    // Define the logout function
    const logout = useQuery({
      queryKey: ["USER_LOGOUT"],
      queryFn: useLogout,
    });
  
    // Return the logout function
    return logout;
  };
  