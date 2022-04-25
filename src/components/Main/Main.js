import React from "react";
// import useTranslation from "../customHooks/translations";

import "../../css/Main.css";

function Main() {
  // const strings = useTranslation();

  return (
    <main>
      <ul className="Main-content-list">
        <li>
          <h3 className="Main-headlines">Новини</h3>
        </li>
        <li>
          <h3 className="Main-headlines">Оголошення</h3>
        </li>
        <li>
          <h3 className="Main-headlines">Iнше</h3>
        </li>
      </ul>
    </main>
  );
}

export default Main;
