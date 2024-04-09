import { useGetMessageDetailById } from "@/services/queries/chat/chat.query";
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
  const [newChat, setNewChat] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewChat(e.target.value);
  };
  const handleSubmit = () => {
    socket.emit("create-message", newChat);
    setNewChat("");
  };

  useEffect(() => {
    // socket.on("message");
  }, []);

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
