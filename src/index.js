import React from "react";
import ReactDOM from "react-dom/client";
import SimpleReactLightbox from "simple-react-lightbox";

import App from "./App";
import "./css/index.css";

import LanguageContextProvider from "./components/contexts/LanguageContext";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

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
        <SimpleReactLightbox>
          <App />
        </SimpleReactLightbox>
      </ThemeSwitcherProvider>
    </LanguageContextProvider>
  </React.StrictMode>
);

reportWebVitals();
