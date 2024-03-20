import { call, put } from "redux-saga/effects";
import { DataResponse } from "../../../utils/utils";
import UserApi, { UserLoginType } from "./user.api";
import UserAction from "./user.action";


export function* login({payload}: {payload: UserLoginType}) {
    try {
        const response:DataResponse<string> = yield call(UserApi.login, payload)
        if(response.status) {
            yield put(UserAction.loginSuccess)
        }
    } catch (error) {
        yield put(UserAction.loginFailure)
    }
}