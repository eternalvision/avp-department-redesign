import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import LanguageContextProvider from "./components/contexts/LanguageContext";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

import { HeaderComponents } from "../src/components/index";
import { MainComponents } from "../src/components/index";
import { FooterComponents } from "../src/components/index";

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
        <HeaderComponents.Header />
        <HeaderComponents.Menu />
        <MainComponents.Slider />
        <MainComponents.Main />
        <FooterComponents.Footer />
      </ThemeSwitcherProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);

reportWebVitals();
