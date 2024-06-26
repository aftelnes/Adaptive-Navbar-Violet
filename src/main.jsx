import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";

import App from "./App.jsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider>
    <App />
  </MantineProvider>
);
