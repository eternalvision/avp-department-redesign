import React from "react";
import useTranslation from "../../customHooks/translations";

function Magistracy() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.magistracy}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Magistracy;
