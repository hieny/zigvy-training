import React, { lazy } from "react";

const HomeComponent = lazy(() => import("../page/Home"));

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
    isCommon: true,
    component: HomeComponent,
  },
};

export default routerMeta;
