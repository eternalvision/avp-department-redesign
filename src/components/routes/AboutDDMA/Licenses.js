import React from "react";
import useTranslation from "../../customHooks/translations";

function Licenses() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.licensesAndCertificates}</p>
    </main>
  );
}

export default Licenses;
