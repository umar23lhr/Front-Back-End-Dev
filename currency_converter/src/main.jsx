import React from "react";
import ReactDOM from "react-dom/client"; // Correct import for React 18
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "font-awesome/css/font-awesome.css"; // Vite resolves these from node_modules automatically
import "currency-flags/dist/currency-flags.css"; // Same for this import

// Get the root element
const rootElement = document.getElementById("root");

// Create the root and render the app
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Service worker registration
serviceWorker.unregister(); // Keep this for PWA, but unregister if you don't need it
