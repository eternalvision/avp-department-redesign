import React from "react";
import useTranslation from "../../customHooks/translations";
import RightMenu from "./RightMenu";
import ButtonTop from "../../routes/Main/ButtonTop";
import { Link } from "react-router-dom";

import logo from "../../../img/logo.png";

function Header() {
  const strings = useTranslation();

  return (
    <header className="App-header">
      <ButtonTop />
      <ul className="Menu-list">
        <li className="Title">
          <Link to="/">
            <ul>
              <li>
                <img className="Logo" src={logo} alt="ddma-logo" />
              </li>
              <li className="Logo-title">{strings.title}</li>
            </ul>
          </Link>
        </li>
        <li className="Right-menu">
          <RightMenu />
        </li>
      </ul>
    </header>
  );
}

export default Header;
