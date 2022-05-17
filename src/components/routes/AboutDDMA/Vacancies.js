import React from "react";
import useTranslation from "../../customHooks/translations";

function Vacancies() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.vacancies}</div>
    </>
  );
}

export default Vacancies;
