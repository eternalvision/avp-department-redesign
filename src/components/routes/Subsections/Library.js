import React from "react";
import useTranslation from "../../customHooks/translations";

function Library() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.library}</p>
    </main>
  );
}

export default Library;
