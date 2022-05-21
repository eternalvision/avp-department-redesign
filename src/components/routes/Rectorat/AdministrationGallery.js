import React from "react";

import useTranslation from "../../customHooks/translations";

function AdministrationsGallery() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.rectorsGallery}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default AdministrationsGallery;
