import React from "react";
import useTranslation from "../customHooks/translations";

function Editorial() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.wording}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Editorial;
