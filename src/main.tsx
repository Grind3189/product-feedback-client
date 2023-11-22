import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter as Router } from "react-router-dom";
import "./index.css";
import WidthContextProvider from "context/WidthContext.tsx";
import UserContextProvider from "context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <WidthContextProvider>
          <App />
        </WidthContextProvider>
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
);
