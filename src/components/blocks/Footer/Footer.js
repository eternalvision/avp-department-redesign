import React from "react";

import navigation from "./navigation-ico.svg";
import mail from "./mail.svg";

// import useTranslation from "../customHooks/translations";

function Footer() {
  // const strings = useTranslation();

  return (
    <footer>
      <ul>
        <li>
          <a href="https://goo.gl/maps/ZQMzuvp8Y8mKHgm16" target="_blank" rel="noreferrer">
            <img className="Footer-imgs" width={45.99} src={navigation} alt="" />
          </a>
        </li>
        <li className="Numbers">
          <a href="tel:(0626) 41-69-84" target="_blank" rel="noreferrer">
            (0626) 41-69-84
          </a>
        </li>
        <li>
          <a href="mailto:app@dgma.donetsk.ua" target="_blank" rel="noreferrer">
            <img className="Footer-imgs" width={45.98} src={mail} alt="" />
          </a>
        </li>
      </ul>
      <ul>
        <li className="Author-link">
          Created by{" "}
          <a target="_blank" rel="noreferrer" href="https://eternalvision.github.io/Resume/">
            Alexandr Pryadchenko
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
