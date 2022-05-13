import React from "react";

import { alertsNews } from "../../../../img";

function AlertsNews() {
  return (
    <ul className="Second-news">
      <li>
        <a href="">
          <img src={alertsNews.Ogoloshennya} alt="" />
          <div className="Second-news-text">
            <p>ДО УВАГИ АБІТУРІЄНТІВ 2022 РОКУ!</p>
            <p>
              Донбаська державна машинобудівна академія запрошує на безоплатні підготовчі онлайн-курси з
              національного...
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src={alertsNews.graphicProvedenya} alt="" />
          <div className="Second-news-text">
            <p>До уваги здобувачів бакалаврського рівня вищої освіти</p>
            <p>Дати проведення кваліфікаційного екзамену за спеціальностями дивіться в розділі «Студенту» –</p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src={alertsNews.Fullbright} alt="" />
          <div className="Second-news-text">
            <p>Програми ім. Фулбрайта в Україні</p>
            <p>
              Незважаючи на трагічні обставини війни, Програма академічних обмінів імені Фулбрайта підтверджує свою
              присутність в Україні та не...
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src={alertsNews.image} alt="" />
          <div className="Second-news-text">
            <p>Проведення міжнародної конференції з ОМТ перенесено</p>
            <p>Шановні колеги! З надією на мир та благополуччя...</p>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default AlertsNews;
