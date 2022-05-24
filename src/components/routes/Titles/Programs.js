import React from "react";
import useTranslation from "../../customHooks/translations";

function Programs() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.programs}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Programs;
