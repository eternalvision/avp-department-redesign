import React from "react";
import useTranslation from "../customHooks/translations";

function News() {
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

export default News;
