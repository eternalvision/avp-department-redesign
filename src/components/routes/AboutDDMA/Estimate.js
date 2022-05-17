import React from "react";
import useTranslation from "../../customHooks/translations";

function Estimate() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.estimateAndFinancialReport}</div>
    </>
  );
}

export default Estimate;
