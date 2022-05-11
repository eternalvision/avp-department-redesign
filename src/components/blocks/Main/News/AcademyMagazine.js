import React from "react";
import { academyMagazine } from "../../../../img";

function AcademyMagazine() {
  return (
    <ul className="Social-links">
      <li>
        <a href="">
          <img src={academyMagazine.gazetaBanner} alt="" />
          <div className="Social-main-title">
            <p>Свіжий номер газети «Академія» вже на сайті</p>
          </div>
        </a>
      </li>
    </ul>
  );
}

export default AcademyMagazine;
