import React from "react";
import useTranslation from "../customHooks/translations";

function Rectorat() {
  const strings = useTranslation();

  return (
    <main>
      <p>{strings.rectorate}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Rectorat;
