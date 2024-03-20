/* eslint-disable @typescript-eslint/no-explicit-any */
class UserAction {
    static ACTION_TYPE = {
        LOGIN: 'User/LOGIN',
        LOGIN_SUCCESS: 'User/LOGIN_SUCCESS',
        LOGIN_FAILED: 'User/LOGIN_FAILED'
    }

    static login = (payload: any) => {
        return {
            type: UserAction.ACTION_TYPE.LOGIN,
            payload
        }
    }
    static loginSuccess = (payload: any) => {
        return {
            type: UserAction.ACTION_TYPE.LOGIN_SUCCESS,
            payload
        }
    }
    static loginFailure = (payload: any) => {
        return {
            type: UserAction.ACTION_TYPE.LOGIN_FAILED,
            payload
        }
    }
}

export default UserAction;
