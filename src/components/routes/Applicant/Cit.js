import React from "react";

import useTranslation from "../../customHooks/translations";

function Cit() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.cit}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default Cit;
