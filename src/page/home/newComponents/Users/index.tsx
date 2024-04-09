import { useCreateNewMessages } from "@/services/queries/chat/chat.query";
import { useGetAllUsers } from "@/services/queries/user/user.query";
import { useNavigate } from "react-router-dom";

export type UserType = {
  _id: string;
  name: string;
  email: string;
};

export default function Users() {
  const { data, isFetched, isError } = useGetAllUsers();
  const navigate = useNavigate();
  console.log("data", data);
  console.log("isFetched", isFetched);
  console.log("isError", isError);

  const useCreateNewChat = useCreateNewMessages();
  const handleChat = async (userId: string) => {
    const response = await useCreateNewChat.mutateAsync({ to: userId });
    
    if (response) {
      navigate(`/messages/${response._id}`);
    }
  };
  return (
    <div>
      <ul>
        {data &&
          data.map((item: UserType, index: number) => {
            return (
              <li key={index}>
                <p>{item.name}</p>
                <button onClick={() => handleChat(item._id)}>Chat now</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
