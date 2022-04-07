import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CloudPage from "./routes/CloudPage";
import ContactPage from "./routes/ContactPage";
import RecoveryPage from "./routes/RecoveryPage";

// react17 new version
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// react18 new version
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/recovery" element={<RecoveryPage />} />
        <Route path="/cloud" element={<CloudPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
