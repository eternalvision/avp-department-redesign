import React from "react";

import useTranslation from "../../customHooks/translations";

function ScientificPrograms() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.scientificPrograms}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default ScientificPrograms;
