import {
  // useGetMessageDetailById,
  useGetMessagelById,
} from "@/services/queries/chat/chat.query";
import { ChangeEvent, useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export type MessageDetailType = {
  messageId: string | undefined;
  socket: Socket;
};

export type MessageDetail = {
  _id: string;
  createdAt: string;
  content: string;
  from: {
    name: string;
  };
};

export default function MessageDetail({
  messageId,
  socket,
}: MessageDetailType) {
  // const { data } = useGetMessageDetailById(messageId ? messageId : "");
  const message = useGetMessagelById(messageId ? messageId : "");
  const [newChat, setNewChat] = useState<string>("");
  const [messageData, setMessageData] = useState<MessageDetail[]>([]);

  // console.log("data 1111", data);
  console.log("message 1111", message);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewChat(e.target.value);
  };
  const handleSubmit = () => {
    socket.emit("create-message", {
      content: newChat,
      to: message.data.to ? message.data.to : localStorage.getItem("toID"),
      messageId,
    });
    setNewChat("");
  };

  useEffect(() => {
    // Subscribe to 'message' event when the component mounts
    socket.on("message", (newMessage: MessageDetail[]) => {
      // Handle incoming message here, for example, update component state
      // setMessageData((prev)=> [ ...prev, newMessage]);
      setMessageData((prevMessages) => [
        ...prevMessages,
        ...(Array.isArray(newMessage) ? newMessage : [newMessage]),
      ]);
      console.log("New message received:", newMessage);
      // setMessageData[...messageData, newMessage]
    });

    // Unsubscribe from 'message' event when the component unmounts
    return () => {
      socket.off("message");
    };
  }, [socket]);

  useEffect(() => {
    socket.emit("requestAllMessage", messageId);
    socket.on("getMessage", (newMessage) => {
      console.log("Newherer:", newMessage);
      setMessageData(newMessage);
    });
  }, []);

  return (
    <div>
      {messageData && messageData.length > 0 ? (
        <ul>
          {messageData.map((message: MessageDetail) => (
            <li key={message._id}>
              {message.content} - {message.from.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>Do not have any thing!!</div>
      )}
      <div>
        <input
          placeholder="new chat"
          value={newChat}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <button type="submit" onClick={handleSubmit}>
          send
        </button>
      </div>
    </div>
  );
}
