import React from "react";
import useTranslation from "../../customHooks/translations";

function EducationPrograms() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.educationalProgramsAndCurricula}</div>
    </>
  );
}

export default EducationPrograms;
