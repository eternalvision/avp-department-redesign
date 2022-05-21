import React from "react";

import useTranslation from "../../customHooks/translations";

function RectorElection() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.electionOfTheRector}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default RectorElection;
