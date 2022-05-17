import React from "react";
import useTranslation from "../../customHooks/translations";

function History() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.history}</div>
    </>
  );
}

export default History;
