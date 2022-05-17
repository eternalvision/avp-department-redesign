import React from "react";
import useTranslation from "../../customHooks/translations";

function HonorPage() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.honorPage}</div>
    </>
  );
}

export default HonorPage;
