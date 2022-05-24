import React from "react";
import useTranslation from "../../customHooks/translations";

function MethodologicalSupport() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.methodologicalSupport}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default MethodologicalSupport;
