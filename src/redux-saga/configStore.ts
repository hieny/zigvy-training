//This file is used for create and initialize configuration of reducers and saga
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
import LoginShowModalReducer from "./redux/login/loginShowModalReducer";
const middleSaga = createMiddleWareSaga();
const allReducer = combineReducers({
  LoginShowModalReducer,
});
export type RootState = ReturnType<typeof allReducer>;
const store = configureStore({
  reducer: allReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      middleSaga
    );
  },
});

middleSaga.run(rootSaga);

export default store;
