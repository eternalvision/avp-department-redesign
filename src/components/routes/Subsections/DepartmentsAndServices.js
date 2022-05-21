import React from "react";
import useTranslation from "../../customHooks/translations";

function DepartmentsAndServices() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.departmentsAndServices}</p>
    </main>
  );
}

export default DepartmentsAndServices;
