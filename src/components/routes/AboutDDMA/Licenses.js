import React from "react";
import useTranslation from "../../customHooks/translations";

function Licenses() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.licensesAndCertificates}</div>
    </>
  );
}

export default Licenses;
