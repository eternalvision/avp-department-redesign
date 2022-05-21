import React from "react";
import useTranslation from "../../customHooks/translations";

function ITSolutionsCenter() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.itSolutionsCenter}</p>
    </main>
  );
}

export default ITSolutionsCenter;
