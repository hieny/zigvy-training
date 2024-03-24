// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClientProvider } from "@tanstack/react-query";

import { BrowserRouter } from "react-router-dom";
import queryClient from "./services/queries/queryClient.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
        <App />
      {/* <React.StrictMode>
      </React.StrictMode> */}
    </QueryClientProvider>
  </BrowserRouter>
);
