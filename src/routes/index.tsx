import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import LoadingFallback from "./LoadingFallback";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import routerMeta, { RouterMeta } from "./routerMeta";
import Layout from "../layouts";


// const lazyImport = (pageName: string) => lazy(() => import(`../page/${pageName}/index`));

const lazyImport = (pageName: string) => lazy(() => import(`../page/${pageName}/index`));


// const HomePage = lazy(() => import('../page/home/index'))

const assignRouter = Object.keys(routerMeta).map((componentKey: string) => {
    const props: RouterMeta = routerMeta[componentKey];
  
    return {
      Component: lazyImport(componentKey),
      props,
    };
  });

  console.log("lazyImport", lazyImport)
  const Router = () => {
    const { reset } = useQueryErrorResetBoundary();
  
    return (
      <Routes>
        <Route element={<Layout/>}>
          {assignRouter.map(({ Component, props }) => (
            <Route
              key={props.path}
              path={props.path}
              element={
                <ProtectedRoute path={props.path}>
                  <Suspense fallback={<LoadingFallback />}>
                    <ErrorBoundary
                      onReset={reset}
                      fallbackRender={({ resetErrorBoundary }) => (
                        <ErrorFallback resetErrorBoundary={resetErrorBoundary} />
                      )}
                    >
                      <Component />
                    </ErrorBoundary>
                  </Suspense>
                </ProtectedRoute>
              }
            />
          ))}
        </Route>
      </Routes>
    );
  };
  
  export default Router;