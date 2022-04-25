import React from "react";
import useTranslation from "../customHooks/translations";
import RightMenu from "./RightMenu";

import logo from "../../img/logo.png";
import "../../css/Header.css";

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
        <li className="Right-menu">
          <RightMenu />
        </li>
      </ul>
    </header>
  );
}

export default Header;