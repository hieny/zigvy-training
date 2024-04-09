import React, { lazy } from "react";

const HomeComponent = lazy(() => import("../page/Home"));
const SignInComponent = lazy(() => import("../page/SignIn"));
const SignUpComponent = lazy(() => import("../page/SignUp"));
const ChatComoponent = lazy(() => import("../page/Home/newComponents/Chat/index"));

export type RouterMeta = {
  name?: string;
  path: string;
  isCommon: boolean;
  component: React.LazyExoticComponent<() => JSX.Element>;
};

export type RouterMetaType = {
  [key: string]: RouterMeta;
};

const routerMeta: RouterMetaType = {
  home: {
    name: "Home",
    path: "/",
    isCommon: false,
    component: HomeComponent,
  },
  signIn: {
    name: "Sign In",
    path: "/sign-in",
    isCommon: true,
    component: SignInComponent,
  },
  signUp: {
    name: "Sign In",
    path: "/sign-up",
    isCommon: true,
    component: SignUpComponent,
  },
  chat: {
    name: "Chat",
    path: "/messages",
    isCommon: false,
    component: ChatComoponent,
  },
  chatDetail: {
    name: "Chat detail",
    path: "/messages/:id",
    isCommon: false,
    component: ChatComoponent,
  }
};

export default routerMeta;
