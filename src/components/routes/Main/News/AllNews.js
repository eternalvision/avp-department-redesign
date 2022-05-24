import React from "react";
// import { Link } from "react-router-dom";

import useTranslation from "../../../customHooks/translations";

function AllNews() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.news}</p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </main>
  );
}

export default AllNews;
