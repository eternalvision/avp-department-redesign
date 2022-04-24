import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import LanguageContextProvider from "./components/contexts/LanguageContext";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <Header />
      <Menu />
      <Slider />
    </LanguageContextProvider>
  </React.StrictMode>
);

reportWebVitals();
