import React from "react";
import useTranslation from "../customHooks/translations";

function RemoteCenter() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.toTheEntrant}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default RemoteCenter;
