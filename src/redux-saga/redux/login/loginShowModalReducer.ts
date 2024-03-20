
import { SHOW_MODAL_LOGIN_REDUX, TURN_OFF_MODAL_LOGIN_REDUX } from "../../../actions/constances"
import { ActionType } from "../../../utils/utils"

type LoginModal = {
    isShow: boolean,
}

const initialState: LoginModal = {
    isShow: false
}

const loginShowModalReducer = (state = initialState, action: ActionType<unknown>) => {
  switch (action.type) {

  case SHOW_MODAL_LOGIN_REDUX:
    return { ...state, isShow: true }
  case TURN_OFF_MODAL_LOGIN_REDUX:
    return { ...state, isShow: false }

  default:
    return state
  }
}

export default loginShowModalReducer
