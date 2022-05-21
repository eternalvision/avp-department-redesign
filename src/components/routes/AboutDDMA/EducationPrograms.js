import React from "react";
import useTranslation from "../../customHooks/translations";

function EducationPrograms() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.educationalProgramsAndCurricula}</p>
    </main>
  );
}

export default EducationPrograms;
