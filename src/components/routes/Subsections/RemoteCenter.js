import React from "react";
import useTranslation from "../../customHooks/translations";

function RemoteCenter() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.centerForDistanceAndDistanceEducation}</p>
    </main>
  );
}

export default RemoteCenter;
