import React from "react";

import useTranslation from "../../customHooks/translations";

function AvpAndIt() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.appAndIt}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default AvpAndIt;