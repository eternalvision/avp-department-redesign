import React from "react";
import useTranslation from "../../customHooks/translations";

function AcademicCouncil() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.academicCouncil}</div>
    </>
  );
}

export default AcademicCouncil;
