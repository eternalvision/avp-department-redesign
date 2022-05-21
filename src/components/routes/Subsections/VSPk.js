import React from "react";
import useTranslation from "../../customHooks/translations";

function VSPk() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.vspKfkPitbDsea}</p>
    </main>
  );
}

export default VSPk;
