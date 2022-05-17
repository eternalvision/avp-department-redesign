import React from "react";
import useTranslation from "../../customHooks/translations";

function Regulations() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.regulations}</div>
    </>
  );
}

export default Regulations;
