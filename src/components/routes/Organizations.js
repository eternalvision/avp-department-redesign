import React from "react";
import useTranslation from "../customHooks/translations";

function Organizations() {
  const strings = useTranslation();

  return (
    <main>
      <p>{strings.NGOs}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Organizations;
