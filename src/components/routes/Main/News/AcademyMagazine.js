import React from "react";
import { Link } from "react-router-dom";
import { academyMagazine } from "../../../../img";

function AcademyMagazine() {
  return (
    <ul className="Academy-magazine">
      <li>
        <Link to="/main/academymagazine">
          <img src={academyMagazine.gazetaBanner} alt="" />
          <div className="Social-main-title">
            <p>Свіжий номер газети «Академія» вже на сайті</p>
          </div>
        </Link>
      </li>
    </ul>
  );
}

export default AcademyMagazine;
