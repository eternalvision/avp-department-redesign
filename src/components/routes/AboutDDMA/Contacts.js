import React from "react";
import useTranslation from "../../customHooks/translations";

function Contacts() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.contacts}</p>
    </main>
  );
}

export default Contacts;
