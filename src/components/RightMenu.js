import React from "react";

import search from "../img/search.png";
import menu from "../img/menu.png";
import eyeVisible from "../img/eyeVisible.png";

function RightMenu() {
  return (
    <li className="Right-menu">
      <ul>
        <li className="Theme-switch-list">
          <button className="Eye-btn">
            <img src={eyeVisible} alt="eyeVisible" />
          </button>
        </li>
        <li className="Theme-switch-list">
          <button className="Search-btn">
            <img src={search} alt="searchBtn" />
          </button>
        </li>
        <li className="Theme-switch-list">
          <button className="Search-btn">
            <img src={menu} alt="searchBtn" />
          </button>
        </li>
      </ul>
    </li>
  );
}

export default RightMenu;
