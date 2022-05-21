import React from "react";
import useTranslation from "../customHooks/translations";

function ForStudents() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.toTheStudent}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default ForStudents;
