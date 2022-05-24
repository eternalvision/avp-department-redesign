import React from "react";
import useTranslation from "../../customHooks/translations";

function Advertisement() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.advertisement}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Advertisement;
