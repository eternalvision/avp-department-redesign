import React from "react";
import useTranslation from "../../customHooks/translations";

function MaterialBase() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.materialBase}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default MaterialBase;
