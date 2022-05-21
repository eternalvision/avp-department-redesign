import React from "react";
import useTranslation from "../../customHooks/translations";

function GeneralInformation() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.generalAndPublicInformation}</p>
    </main>
  );
}

export default GeneralInformation;
