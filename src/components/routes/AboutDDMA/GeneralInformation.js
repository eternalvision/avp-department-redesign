import React from "react";
import useTranslation from "../../customHooks/translations";

function GeneralInformation() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.generalAndPublicInformation}</div>
    </>
  );
}

export default GeneralInformation;
