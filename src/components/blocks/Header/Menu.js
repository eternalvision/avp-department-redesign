import React from "react";
import { Link } from "react-router-dom";

import useTranslation from "../../customHooks/translations";
import LanguageHandler from "../../customComponents/LanguageHandler";

function Menu() {
  const strings = useTranslation();

  return (
    <nav>
      <ul className="topmenu">
        <li>
          <Link to="/">{strings.home}</Link>
        </li>
        <li>
          <Link to="/advertisement">{strings.advertisement}</Link>
        </li>
        <li>
          <Link to="/applicant">{strings.applicant}</Link>
          <ul className="submenu">
            <li>
              <Link to="/applicant/automatization-and-cit">{strings.automatizationAndCit}</Link>
            </li>
            <li>
              <Link to="/applicant/cit">{strings.cit}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/programs">{strings.programs}</Link>
          <ul className="submenu">
            <li>
              <Link to="/programs/working-programs">{strings.workingPrograms}</Link>
            </li>
            <li>
              <Link to="/programs/scientific-programs">{strings.scientificPrograms}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/curricula">{strings.curricula}</Link>
          <ul className="submenu">
            <li>
              <Link to="/curricula/automatization-and-cit">{strings.automatizationAndCit}</Link>
            </li>
            <li>
              <Link to="/curricula/cit">{strings.cit}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/methodological-support">{strings.methodologicalSupport}</Link>
        </li>
        <li>
          <Link to="/magistracy">{strings.magistracy}</Link>
        </li>
        <li>
          <Link to="/topics-of-qualification-works">{strings.topicsOfQualificationWorks}</Link>
        </li>
        <li>
          <Link to="/material-base">{strings.materialBase}</Link>
        </li>
        <li>
          <Link to="/automation-center-and-cit">{strings.automationCenterAndCit}</Link>
        </li>
        <li>
          <Link to="/other">{strings.other}</Link>
        </li>
        <li className="Language-switcher">
          <LanguageHandler />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
