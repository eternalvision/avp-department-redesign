import React from "react";
// import { Link } from "react-router-dom";

import useTranslation from "../../../customHooks/translations";

function AllOther() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.other}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default AllOther;
