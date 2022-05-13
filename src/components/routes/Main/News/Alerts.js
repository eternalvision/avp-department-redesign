import React from "react";
import { alertsImages } from "../../../../img";

function Alerts() {
  return (
    <ul className="Alerts">
      <li>
        <a href="">
          <img src={alertsImages.dzo} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={alertsImages.sikorsky} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={alertsImages.donbasUkraine} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={alertsImages.donScienceCenter} alt="" />
        </a>
      </li>
      <li>
        <a href="">
          <img src={alertsImages.it} alt="" />
        </a>
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
