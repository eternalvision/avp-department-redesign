import React from "react";
import { alertsImages } from "../../../../img";

function Alerts() {
  return (
    <ul className="Main-news">
      <a href="">
        <li>
          <img src={alertsImages.dzo} alt="" />
          <div className="Main-news-text">
            <p>Разом до перемоги!</p>
            <p>
              Шановні студенти, викладачі й співробітники! Свій 69-й день народження Академія святкує у буремний час –
              57 днів у нашій країні триває війна, страшна й нещадна, гинуть люди, руйнуються міста. Через вторгнення
              росії в Україну багато з нас вимушені були переїхати у більш безпечні міста, дехто за ...
            </p>
          </div>
        </li>
      </a>
    </ul>
  );
}

export default Alerts;
