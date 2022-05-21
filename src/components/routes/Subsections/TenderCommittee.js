import React from "react";
import useTranslation from "../../customHooks/translations";

function TenderCommittee() {
  const strings = useTranslation();

  return (
    <main>
      <p className="Title-routes">{strings.tenderCommittee}</p>
    </main>
  );
}

export default TenderCommittee;
