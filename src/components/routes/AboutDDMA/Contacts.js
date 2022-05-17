import React from "react";
import useTranslation from "../../customHooks/translations";

function Contacts() {
  const strings = useTranslation();

  return (
    <>
      <div>{strings.contacts}</div>
    </>
  );
}

export default Contacts;
