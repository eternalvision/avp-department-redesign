import React from "react";
import useTranslation from "../../customHooks/translations";

function History() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.history}</p>
    </main>
  );
}

export default History;
