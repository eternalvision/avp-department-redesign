import React from "react";
import useTranslation from "../customHooks/translations";

function Science() {
  const strings = useTranslation();

  return (
    <main>
      <p>{strings.science}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Science;
