import React from "react";
import useTranslation from "../../customHooks/translations";

function BasicInformation() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.basicInformation}</div>
    </>
  );
}

export default BasicInformation;
