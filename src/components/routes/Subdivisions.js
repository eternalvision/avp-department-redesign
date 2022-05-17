import React from "react";
import useTranslation from "../customHooks/translations";

function Subdivisions() {
  const strings = useTranslation();

  return (
    <main>
      <p>{strings.subdivisions}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Subdivisions;
