import { Route, Routes } from "react-router-dom";
// import HomePage from "./page/home";
import { Suspense, lazy } from "react";

import { ToastProvider } from "./components/Toastify/ToastProvider";
// import Toastify from "./components/toastify/Toastify";
const HomePage = lazy(() => import("./page/home"));

function App() {
  return (
    <ToastProvider>
      {/* <Toastify /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
      </Routes>
    </ToastProvider>
  );
}

export default App;
