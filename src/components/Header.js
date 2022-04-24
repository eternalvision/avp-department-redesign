import React from "react";
import "../css/Header.css";

import useTranslation from "../components/customHooks/translations";

import RightMenu from "./RightMenu";

import logo from "../img/logo.png";

function Header() {
  const strings = useTranslation();

  return (
    <header className="App-header">
      <ul className="Menu-list">
        <li className="Title">
          <ul>
            <li>
              <img className="Logo" src={logo} alt="ddma-logo" />
            </li>
            <li className="Logo-title">{strings.title}</li>
          </ul>
        </li>
        <RightMenu />
      </ul>
    </header>
  );
}

export default Header;
