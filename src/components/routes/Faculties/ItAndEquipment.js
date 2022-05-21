import React from "react";

import useTranslation from "../../customHooks/translations";

function ItAndEquipment() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.itAndEquipment}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default ItAndEquipment;
