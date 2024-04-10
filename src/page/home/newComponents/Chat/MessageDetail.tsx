import {
  useGetMessageDetailById,
  useGetMessagelById,
} from "@/services/queries/chat/chat.query";
import { ChangeEvent, useEffect, useState } from "react";
import { Socket } from "socket.io-client";

export type MessageDetailType = {
  messageId: string | undefined;
  socket: Socket;
};

export default function MessageDetail({
  messageId,
  socket,
}: MessageDetailType) {
  const { data } = useGetMessageDetailById(messageId ? messageId : "");
  const message = useGetMessagelById(messageId ? messageId : "");
  const [newChat, setNewChat] = useState<string>("");

  console.log("data 1111", data);
  console.log("message 1111", message);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewChat(e.target.value);
  };
  const handleSubmit = () => {
    socket.emit("create-message", { content: newChat, to: message.data.to, messageId });
    setNewChat("");
  };

  useEffect(() => {
    // Subscribe to 'message' event when the component mounts
    socket.on("message", (newMessage) => {
      // Handle incoming message here, for example, update component state
      console.log("New message received:", newMessage);
    });

    // Unsubscribe from 'message' event when the component unmounts
    return () => {
      socket.off("message");
    };
  }, [socket]);

  return (
    <div>
      {data && data.length > 0 ? (
        <p>new here</p>
      ) : (
        <div>Do not have any thing!!</div>
      )}
      <div>
        <input
          placeholder="new chat"
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
