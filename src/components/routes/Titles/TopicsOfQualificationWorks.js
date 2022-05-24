import React from "react";
import useTranslation from "../../customHooks/translations";

function TopicsOfQualificationWorks() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.topicsOfQualificationWorks}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default TopicsOfQualificationWorks;
