import React from "react";

import { newsImages } from "../../../../img";
// import { army } from "../../../../img";

function SecondaryNews() {
  return (
    <ul className="Second-news">
      <li>
        <a href="">
          <img src={newsImages.buchaLeeDurant} alt="" />
          <div className="Second-news-text">
            <p>Війна і мир. Листи</p>
            <p>
              24 лютого у всіх нас змінилося життя. Багато кому довелося покинути свої домівки і жити в очікуванні, коли
              все закінчиться. Уся Україна чекає, бор...
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src={newsImages.army} alt="" />
          <div className="Second-news-text">
            <p>Назавжди український Донбас</p>
            <p>
              Те, що наше місто є українським, після 2014 року мало в кого з містян викликає сумніви. Але й досі є
              стереоти...
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src={newsImages.dopomoga} alt="" />
          <div className="Second-news-text">
            <p>Білоруські партизани допомогли</p>
            <p>
              «Буквально з перших днів вторгнення в Білорусі почала оперувати таємна мережа, до якої увійшли
              залізничники, хакери й перебіж...
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="">
          <img src={newsImages.voynaukrayna} alt="" />
          <div className="Second-news-text">
            <p>Війна і мир. Листи</p>
            <p>
              Чергова стаття добровольця української армії з позивним «Чупік». Як зазвичай, ми намагалися зберегти
              оригінальний стиль написання – задля більшої ...
            </p>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default SecondaryNews;
