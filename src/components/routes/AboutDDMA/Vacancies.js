import React from "react";
import useTranslation from "../../customHooks/translations";

function Vacancies() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.vacancies}</p>
    </main>
  );
}

export default Vacancies;
