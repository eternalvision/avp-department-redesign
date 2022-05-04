import React from "react";
import useTranslation from "../customHooks/translations";
import MainNews from "./News/MainNews.js";
import SecondaryNews from "./News/SecondaryNews";
import Alerts from "./News/Alerts";
import AlertsNews from "./News/AlertsNews";
import SocialLinks from "./News/SocialLinks";

import "../../css/Main.css";

function Main() {
  const strings = useTranslation();

  return (
    <main>
      <section className="Content-title">
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
      </section>
      <section className="Content">
        <ul className="AllNews-Container">
          <li>
            <a href="">
              <MainNews />
            </a>
            <SecondaryNews />
          </li>
          <li>
            <Alerts />
            <AlertsNews />
          </li>
          <li>
            <SocialLinks />
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;
