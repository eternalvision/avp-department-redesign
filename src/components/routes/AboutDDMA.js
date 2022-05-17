import React from "react";
import useTranslation from "../customHooks/translations";

function AboutDDMA() {
  const strings = useTranslation();

  return (
    <main>
      <p>{strings.aboutDDMA}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default AboutDDMA;
