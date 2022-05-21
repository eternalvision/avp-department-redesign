import React from "react";
import useTranslation from "../customHooks/translations";

function Faculties() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.faculties}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Faculties;
