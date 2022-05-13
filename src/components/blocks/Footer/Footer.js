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
          <a href="tel:(0626) 41-68-09" target="_blank" rel="noreferrer">
            (0626) 41-68-09
          </a>
          <a href="tel:(0626) 41-80-68" target="_blank" rel="noreferrer">
            (0626) 41-80-68
          </a>
        </li>
        <li className="Numbers">
          <a href="tel:(0626) 41-63-15" target="_blank" rel="noreferrer">
            (0626) 41-63-15
          </a>
          <a href="tel:(0626) 41-66-76" target="_blank" rel="noreferrer">
            (0626) 41-66-76
          </a>
        </li>
        <li>
          <a href="mailto:dgma@dgma.donetsk.ua" target="_blank" rel="noreferrer">
            <img className="Footer-imgs" width={45.98} src={mail} alt="" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
