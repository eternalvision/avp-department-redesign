import React from "react";
import useTranslation from "../../customHooks/translations";

function HonorPage() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.honorPage}</p>
    </main>
  );
}

export default HonorPage;
