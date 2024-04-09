import { useParams } from "react-router-dom";
import MessageDetail from "./MessageDetail";
import MessagesAll from "./MessagesAll";
import { useGetAllMessages } from "@/services/queries/chat/chat.query";
import {io} from "socket.io-client"
import token from "@/lib/token";

export default function ChatPage() {
  const { id } = useParams();
  const { data } = useGetAllMessages();
  const socket = io("http://127.0.0.1:3000/", {
    extraHeaders: {
        Authorization: `Bearer ${token.getToken()}`,
    }
  })
  console.log("socket: " + socket)
  console.log("data", data);
  return (
    <div style={{ display: "flex" }}>
      <MessagesAll />
      <MessageDetail messageId={id} socket={socket}/>
    </div>
  );
}
