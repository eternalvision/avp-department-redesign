import React from "react";

import useTranslation from "../../customHooks/translations";

function WorkingPrograms() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.workingPrograms}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default WorkingPrograms;
