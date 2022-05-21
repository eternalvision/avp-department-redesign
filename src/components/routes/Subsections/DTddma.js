import React from "react";
import useTranslation from "../../customHooks/translations";

function DTddma() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.dtDdma}</p>
    </main>
  );
}

export default DTddma;
