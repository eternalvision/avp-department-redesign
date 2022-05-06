import React from "react";
import ThemeSwitcher from "../../customComponents/ThemeSwitcher";

import search from "../../../img/search.png";
import menu from "../../../img/menu.png";

function RightMenu() {
  return (
    <ul>
      <li className="Theme-switcher">
        <ThemeSwitcher />
      </li>
      <li className="Theme-switch-list">
        <button className="Search-btn">
          <img src={search} alt="searchBtn" />
        </button>
      </li>
      <li className="Theme-switch-list searchBtn">
        <button className="Search-btn">
          <img src={menu} alt="searchBtn" />
        </button>
      </li>
    </ul>
  );
}

export default RightMenu;
