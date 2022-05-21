import React from "react";

import useTranslation from "../../customHooks/translations";

function CompositionAdministration() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.theCompositionOfTheAdministration}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default CompositionAdministration;
