// import HomePage from "./page/home";

import { ToastProvider } from "./components/Toastify/ToastProvider";
import Router from "./routes";
// import Toastify from "./components/toastify/Toastify";
// const HomePage = lazy(() => import("./page/home"));

function App() {
  return (
    <ToastProvider>
      {/* <Toastify /> */}
      <Router/>
      {/* <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
      </Routes> */}
    </ToastProvider>
  );
}

export default App;
