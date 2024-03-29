import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { PaginationProvider } from "./context/pagination/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <PaginationProvider>
        <App />
      </PaginationProvider>
    </ChakraProvider>
  </React.StrictMode>
);
