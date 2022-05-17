import React from "react";
import useTranslation from "../customHooks/translations";

function Applicant() {
  const strings = useTranslation();

  return (
    <main>
      <p>{strings.toTheEntrant}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Applicant;
