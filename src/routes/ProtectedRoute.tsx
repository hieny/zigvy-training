import { Navigate } from "react-router-dom";
import token from "../lib/token";
// import routerMeta from "./routerMeta";

type ProtectedRoute = {
  Component: React.LazyExoticComponent<() => JSX.Element>;
  path: string;
  isCommon: boolean;
};

const ProtectedRoute = ({ Component, isCommon, path }: ProtectedRoute) => {
  const isExsitedAccessToken = !!token.getToken(token.getTokenKey())
  
  if (isCommon) return <Component />;
  //if private
  if (!isCommon && !isExsitedAccessToken) {
    return <Navigate to={"/"} replace={true} />;
  } else {
    return <Navigate to={path} replace={true} />;
  }
};
export default ProtectedRoute;
