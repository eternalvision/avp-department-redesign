import React from "react";

import useTranslation from "../../customHooks/translations";

function AdministrationsFunctions() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.functionsOfTheRectorate}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default AdministrationsFunctions;
