import React from "react";

import { NewsComponents } from "./News/index.js";

// import useTranslation from "../../customHooks/translations";

function Main() {
  // const strings = useTranslation();

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
          <NewsComponents.MainNews />
          <li>
            <NewsComponents.Alerts />
            <NewsComponents.AlertsNews />
          </li>
          <li className="Additional-content">
            <NewsComponents.AcademyMagazine />
            <NewsComponents.SocialLinks />
            <NewsComponents.Videos />
            <NewsComponents.AcademyLife />
            <NewsComponents.UsefullLinks />
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;
