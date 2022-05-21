import React from "react";
import useTranslation from "../../customHooks/translations";

function HigherEducation() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.documentsOnHigherEducation}</p>
    </main>
  );
}

export default HigherEducation;