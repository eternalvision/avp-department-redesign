import React from "react";
import useTranslation from "../../customHooks/translations";

function Other() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.other}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Other;
