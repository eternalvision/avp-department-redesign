import React from "react";
import useTranslation from "../../customHooks/translations";

function DepartmentOfHigherEducation() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.departmentOfInternalQualityAssuranceInHigherEducation}</p>
    </main>
  );
}

export default DepartmentOfHigherEducation;
