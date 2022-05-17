import React from "react";
import useTranslation from "../../customHooks/translations";

function HigherEducation() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.documentsOnHigherEducation}</div>
    </>
  );
}

export default HigherEducation;
