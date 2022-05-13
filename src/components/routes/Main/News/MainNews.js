import React from "react";
import ddma from "../../../../img/news/ddmaa.jpg";
import SecondaryNews from "./SecondaryNews";

function MainNews() {
  return (
    <li>
      <ul className="Main-news">
        <a href="">
          <li>
            <img src={ddma} alt="" />
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
      <SecondaryNews />
    </li>
  );
}

export default MainNews;
