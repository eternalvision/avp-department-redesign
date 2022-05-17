import React from "react";
import useTranslation from "../customHooks/translations";

function Graduate() {
  const strings = useTranslation();

  return (
    <main>
      <p>{strings.toTheGraduate}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Graduate;
