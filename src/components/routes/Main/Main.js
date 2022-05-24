import React from "react";
import { Link } from "react-router-dom";

import { NewsComponents } from "./News/index.js";

import useTranslation from "../../customHooks/translations";

function Main() {
  const strings = useTranslation();

  return (
    <main>
      <section className="Content-title">
        <ul className="Main-content-list">
          <li>
            <Link to="/news">
              <h3 className="Main-headlines">{strings.news}</h3>
            </Link>
          </li>
          <li>
            <Link to="/alertsnews">
              <h3 className="Main-headlines">{strings.alerts}</h3>
            </Link>
          </li>
          <li>
            <Link to="/other">
              <h3 className="Main-headlines">{strings.otherTitle}</h3>
            </Link>
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
