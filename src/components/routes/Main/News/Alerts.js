import React from "react";
import { Link } from "react-router-dom";

import { alertsImages } from "../../../../img";

function Alerts() {
  return (
    <ul className="Alerts">
      <li>
        <a target="_blank" rel="noreferrer" href="http://moodle.dgma.donetsk.ua/?lang=ru">
          <img src={alertsImages.dzo} alt="" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="http://www.dgma.donetsk.ua/sikorsky/">
          <img src={alertsImages.sikorsky} alt="" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="http://www.dgma.donetsk.ua/donbas-ukraine/centr.html">
          <img src={alertsImages.donbasUkraine} alt="" />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://www.nas.gov.ua/UA/Org/Pages/default.aspx?OrgID=0000177">
          <img src={alertsImages.donScienceCenter} alt="" />
        </a>
      </li>
      <li>
        <Link to="/alerts/solutionscenter">
          <img src={alertsImages.it} alt="" />
        </Link>
      </li>
      <li>
        <a href="">
          <img src={alertsImages.tempusErasmus} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={alertsImages.naukoviVidanya} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={alertsImages.ukrCourses} alt="" />
        </a>
      </li>
    </ul>
  );
}

export default Alerts;
