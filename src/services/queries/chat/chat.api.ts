import apiClient from "@/services/apiClient";
import { CreateNewChatType } from "./chat.type";

export const createNewChat = async (payload: CreateNewChatType) => {
  const response = await apiClient.post("/messages", payload);
  console.log("0000123131", response);
  return response.data;
};

export const getAllMessages = async () => {
  const response = await apiClient.get("/messages");
  console.log("0000123131", response);
  return response.data;
};

export const getMessagesDetailById = async (id: string) => {
  const response = await apiClient.get(`/message-detail/${id}`);
  console.log("response11111: " + response.data);
  return response.data;
};
