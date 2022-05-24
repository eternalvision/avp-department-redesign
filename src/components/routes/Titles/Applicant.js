import React from "react";
import useTranslation from "../../customHooks/translations";

function Applicant() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.applicant}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Applicant;
