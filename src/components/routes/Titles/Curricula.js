import React from "react";
import useTranslation from "../../customHooks/translations";

function Curricula() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.curricula}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Curricula;
