import axios from "axios"

export type UserLoginType = {
    userName: string,
    password: string,
}

export class UserApi{
    static login = async(data: UserLoginType) => {
        return await axios.get("https://sapmpleLogin/Login", {data})
    }
}

export default UserApi