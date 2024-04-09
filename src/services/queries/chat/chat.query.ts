import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createNewChat,
  getAllMessages,
  getMessagesDetailById,
} from "./chat.api";
import { AxiosError } from "axios";

export const useCreateNewMessages = () =>
  useMutation({
    mutationFn: createNewChat,
    onSuccess: (response) => {
      console.log("response: " + JSON.stringify(response));
      return response;
    },
    onError: (
      err: AxiosError<{ message: string; error: string; statusCode: number }>
    ) => {
      return err;
    },
  });

export const useGetAllMessages = () =>
  useQuery({
    queryKey: ["getAllMessages"],
    queryFn: async () => {
      return await getAllMessages();
    },
  });

export const useGetMessageDetailById = (id: string) =>
  useQuery({
    queryKey: ["getDetailMessages"],
    queryFn: async () => {
      return await getMessagesDetailById(id);
    },
  });
