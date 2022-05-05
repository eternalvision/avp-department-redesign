import React from "react";

import { newsImages } from "../../../img";

function SecondaryNews() {
  return (
    <ul className="Second-news">
      <li>
        <img src={newsImages.buchaLeeDurant} alt="" />
        <div>
          <p>Війна і мир. Листи</p>
          <p>
            24 лютого у всіх нас змінилося життя. Багато кому довелося покинути свої домівки і жити в очікуванні, коли
            все закінчиться. Уся Україна чекає, бор...
          </p>
        </div>
      </li>
    </ul>
  );
}

export default SecondaryNews;
