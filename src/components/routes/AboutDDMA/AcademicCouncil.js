import React from "react";
import useTranslation from "../../customHooks/translations";

function AcademicCouncil() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.academicCouncil}</p>
    </main>
  );
}

export default AcademicCouncil;
