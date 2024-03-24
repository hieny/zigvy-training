
import { Navigate } from "react-router-dom";
import token from "../lib/token";
// import routerMeta from "./routerMeta";

interface IProtectedRoute {
  children: JSX.Element;
  path?: string;
}

const ProtectedRoute = ({ children }: IProtectedRoute) => {
  const isExsitedAccessToken = token.getToken(token.getTokenKey())
    ? true
    : false;

  if (!isExsitedAccessToken) {
    return <Navigate to={"/"} replace={true} />;
  }

  // if (isExsitedAccessToken) {
  //   return <Navigate to={routerMeta.HomePage.path} replace={true} />;
  // }

  return children;
};
export default ProtectedRoute;
