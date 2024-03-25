import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingFallback from "./LoadingFallback";
import ProtectedRoute from "./ProtectedRoute";
import routerMeta, { RouterMeta } from "./routerMeta";

const assignRouter = Object.keys(routerMeta).map((componentKey: string) => {
  const props: RouterMeta = routerMeta[componentKey];
  return {
    Component: props.component,
    props,
  };
});

// console.log("assignRouter", assignRouter)
const Router = () => {
  // const { reset } = useQueryErrorResetBoundary();

  return (
    <Routes>
      <Route>
        {assignRouter.map(({ Component, props }) => (
          <Route
            key={props.path}
            path={props.path}
            element={
              <Suspense fallback={<LoadingFallback />}>
                <ProtectedRoute
                  Component={Component}
                  isCommon={props.isCommon}
                  path={props.path}
                />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
};

export default Router;
