import React from "react";
import useTranslation from "../../customHooks/translations";

function Regulations() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.regulations}</p>
    </main>
  );
}

export default Regulations;
