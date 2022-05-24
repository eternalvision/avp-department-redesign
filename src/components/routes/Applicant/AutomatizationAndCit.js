import React from "react";

import useTranslation from "../../customHooks/translations";

function AutomatizationAndCit() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.automatizationAndCit}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default AutomatizationAndCit;
