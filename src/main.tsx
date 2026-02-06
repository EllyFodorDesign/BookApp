import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import theme from "./theme";
import { ThemeProvider } from "styled-components"; // Import ThemeProvider
import PasswordGate from "./components/PasswordGate"; // Import PasswordGate component
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <PasswordGate>
        <App />
        </PasswordGate>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
