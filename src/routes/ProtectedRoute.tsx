import { Navigate } from "react-router-dom";
import token from "../lib/token";
// import routerMeta from "./routerMeta";

type ProtectedRoute = {
  Component: React.LazyExoticComponent<() => JSX.Element>;
  path: string;
  isCommon: boolean;
};

const ProtectedRoute = ({ Component, isCommon }: ProtectedRoute) => {
  const isExsitedAccessToken = !!token.getToken();

  if (isCommon) return <Component />;
  //if private
  if (!isCommon && !isExsitedAccessToken) {
    return <Navigate to={"/sign-in"} replace={true} />;
  } else if (!isCommon && isExsitedAccessToken) {
    return <Component />;
  }
};
export default ProtectedRoute;
