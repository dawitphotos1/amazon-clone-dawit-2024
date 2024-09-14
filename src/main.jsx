import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Ensure this path is correct
import { DataProvider } from "./Components/DataProvider/DataProvider"; // Ensure this path is correct
import { reducer, initialState } from "./Utility/reducer"; // Updated path

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </React.StrictMode>
);
