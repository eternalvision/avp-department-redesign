import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import LanguageContextProvider from "./components/contexts/LanguageContext";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import Slider from "./components/Main/Slider";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";

import reportWebVitals from "./reportWebVitals";

const themes = {
  light: "/light.css",
  dark: "/dark.css",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ThemeSwitcherProvider defaultTheme="light" themeMap={themes}>
        <Header />
        <Menu />
        <Slider />
        <Main />
        <Footer />
      </ThemeSwitcherProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);

reportWebVitals();
