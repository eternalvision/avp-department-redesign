import React from "react";
import useTranslation from "../../customHooks/translations";

function Estimate() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.estimateAndFinancialReport}</p>
    </main>
  );
}

export default Estimate;
