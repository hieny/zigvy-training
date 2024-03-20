import { ActionType } from "../../../utils/utils";
import UserAction from "./user.action";

const initialState = {
  initialUser: {},
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const userReducer = (state = initialState, action: ActionType<any>) => {
  switch (action.type) {
    case UserAction.ACTION_TYPE.LOGIN_SUCCESS:
      return { ...state, initialUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
