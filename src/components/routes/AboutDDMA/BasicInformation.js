import React from "react";
import useTranslation from "../../customHooks/translations";

function BasicInformation() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.basicInformation}</p>
    </main>
  );
}

export default BasicInformation;
