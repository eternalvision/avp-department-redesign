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
          <Link to="/about">{strings.aboutDDMA}</Link>
          <ul className="submenu">
            <li>
              <Link to="/about/basicinformation">{strings.basicInformation}</Link>
            </li>
            <li>
              <Link to="/about/honor">{strings.honorPage}</Link>
            </li>
            <li>
              <Link to="/about/licenses">{strings.licensesAndCertificates}</Link>
            </li>
            <li>
              <Link to="/about/highereducation">{strings.documentsOnHigherEducation}</Link>
            </li>
            <li>
              <Link to="/about/council">{strings.academicCouncil}</Link>
            </li>
            <li>
              <Link to="/about/regulations">{strings.regulations}</Link>
            </li>
            <li>
              <Link to="/about/generalinformation">{strings.generalAndPublicInformation}</Link>
            </li>
            <li>
              <Link to="/about/educationprograms">{strings.educationalProgramsAndCurricula}</Link>
            </li>
            <li>
              <Link to="/about/estimate">{strings.estimateAndFinancialReport}</Link>
            </li>
            <li>
              <Link to="/about/vacancies">{strings.vacancies}</Link>
            </li>
            <li>
              <Link to="/about/history">{strings.history}</Link>
            </li>
            <li>
              <Link to="/about/contacts">{strings.contacts}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/rectorat">{strings.rectorate}</Link>
          <ul className="submenu">
            <li>
              <Link to="/rectorat/electionoftherector">{strings.electionOfTheRector}</Link>
            </li>
            <li>
              <Link to="/rectorat/compositionadministration">{strings.theCompositionOfTheAdministration}</Link>
            </li>
            <li>
              <Link to="/rectorat/administrationsappeal">{strings.rectorsAddress}</Link>
            </li>
            <li>
              <Link to="/rectorat/administrationsfunctions">{strings.functionsOfTheRectorate}</Link>
            </li>
            <li>
              <Link to="/rectorat/administrationgallery">{strings.rectorsGallery}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/faculties">{strings.faculties}</Link>
          <ul className="submenu">
            <li>
              <Link to="/faculties/appandit">{strings.appAndIt}</Link>
            </li>
            <li>
              <Link to="/faculties/itandequipment">{strings.itAndEquipment}</Link>
            </li>
            <li>
              <Link to="/faculties/fm">{strings.fM}</Link>
            </li>
            <li>
              <Link to="/faculties/economicsandmanagement">{strings.economicsAndManagement}</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/subdivisions">{strings.subdivisions}</Link>
          <ul className="submenu">
            <li>
              <Link to="/subdivisions/remotecenter">{strings.centerForDistanceAndDistanceEducation}</Link>
            </li>
            <li>
              <Link to="/subdivisions/itsolutionscenter">{strings.itSolutionsCenter}</Link>
            </li>
            <li>
              <Link to="/subdivisions/vspkfkpitbdsea">{strings.vspKfkPitbDsea}</Link>
            </li>
            <li>
              <Link to="/subdivisions/library">{strings.library}</Link>
            </li>
            <li>
              <Link to="/subdivisions/dtddma">{strings.dtDdma}</Link>
            </li>
            <li>
              <Link to="/subdivisions/departmentsandservices">{strings.departmentsAndServices}</Link>
            </li>
            <li>
              <Link to="/subdivisions/tendercommittee">{strings.tenderCommittee}</Link>
            </li>
            <li>
              <Link to="/subdivisions/departamentofhighereducation">
                {strings.departmentOfInternalQualityAssuranceInHigherEducation}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/applicant">{strings.toTheEntrant}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.conditionsOfEntry}</a>
            </li>
            <li>
              <a href="">{strings.graduatesOfSecondarySchools}</a>
            </li>
            <li>
              <a href="">{strings.graduatesOfCollegesUniversitiesColleges}</a>
            </li>
            <li>
              <a href="">{strings.admissionToTheMastersDegree}</a>
            </li>
            <li>
              <a href="">{strings.admissionToGraduateSchool}</a>
            </li>
            <li>
              <a href="">{strings.admissions}</a>
            </li>
            <li>
              <a href="">{strings.reEntryOnTheBudget}</a>
            </li>
            <li>
              <a href="">{strings.preparatoryCourses}</a>
            </li>
            <li>
              <a href="">{strings.informationAboutDormitories}</a>
            </li>
            <li>
              <a href="">{strings.listOfSpecialties}</a>
            </li>
            <li>
              <a href="">{strings.educationalCenters}</a>
            </li>
            <li>
              <a href="">{strings.practicalTrainingOfSchoolchildren}</a>
            </li>
            <li>
              <a href="">{strings.studentScientificCircle}</a>
            </li>
            <li>
              <a href="">{strings.partTimeOffice}</a>
            </li>
            <li>
              <a href="">{strings.budgetDocuments}</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/science">{strings.science}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.startupSchool}</a>
            </li>
            <li>
              <a href="">{strings.publicationsOfSCOPUS}</a>
            </li>
            <li>
              <a href="">{strings.conferences}</a>
            </li>
            <li>
              <a href="">{strings.erasmusBioart}</a>
            </li>
            <li>
              <a href="">{strings.historyScience}</a>
            </li>
            <li>
              <a href="">{strings.innovationCenter}</a>
            </li>
            <li>
              <a href="">{strings.specializedScientificCouncils}</a>
            </li>
            <li>
              <a href="">{strings.scientificActivities}</a>
            </li>
            <li>
              <a href="">{strings.youthScience}</a>
            </li>
            <li>
              <a href="">{strings.laboratories}</a>
            </li>
            <li>
              <a href="">{strings.outstandingScientists}</a>
            </li>
            <li>
              <a href="">{strings.scientificAndMethodicalPublications}</a>
            </li>
            <li>
              <a href="">{strings.postgraduateStudies}</a>
            </li>
            <li>
              <a href="">{strings.doctoralStudies}</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/forstudents">{strings.toTheStudent}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.disciplinesOfFreeChoice}</a>
            </li>
            <li>
              <a href="">{strings.certificationStateLanguage}</a>
            </li>
            <li>
              <a href="">{strings.scholarship}</a>
            </li>
            <li>
              <a href="">{strings.curricula}</a>
            </li>
            <li>
              <a href="">{strings.tablecalendarOfTheEducationalProcess}</a>
            </li>
            <li>
              <a href="">{strings.scheduleOfClassesForFullTime}</a>
            </li>
            <li>
              <a href="">{strings.classScheduleForCorrespondenceForm}</a>
            </li>
            <li>
              <a href="">{strings.scheduleOfCreditExaminationSession}</a>
            </li>
            <li>
              <a href="">{strings.scheduleOfTheQualifyingExam}</a>
            </li>
            <li>
              <a href="">{strings.distanceLearning}</a>
            </li>
            <li>
              <a href="">{strings.dualLearning}</a>
            </li>
            <li>
              <a href="">{strings.educationAbroad}</a>
            </li>
            <li>
              <a href="">{strings.openEuropeCampaign}</a>
            </li>
            <li>
              <a href="">{strings.militaryDepartment}</a>
            </li>
            <li>
              <a href="">{strings.sport}</a>
            </li>
            <li>
              <a href="">{strings.codeOfHonor}</a>
            </li>
            <li>
              <a href="">{strings.employment}</a>
            </li>
            <li>
              <a href="">{strings.continuingEducationProgram}</a>
            </li>
            <li>
              <a href="">{strings.practice}</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/graduate">{strings.toTheGraduate}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.informationForGraduates}</a>
            </li>
            <li>
              <a href="">{strings.alumniClub}</a>
            </li>
            <li>
              <a href="">{strings.chairmanOfTheUnion}</a>
            </li>
            <li>
              <a href="">{strings.ourGraduates}</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/organizations">{strings.NGOs}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.studentGovernmentCouncil}</a>
            </li>
            <li>
              <a href="">{strings.associationKIIDSEA}</a>
            </li>
            <li>
              <a href="">{strings.volunteerOrganization}</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/editorial">{strings.wording}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.editorialPolicy}</a>
            </li>
            <li>
              <a href="">{strings.trainingMaterials}</a>
            </li>
            <li>
              <a href="">{strings.almanacOfMus}</a>
            </li>
            <li>
              <a href="">{strings.generalInformation}</a>
            </li>
            <li>
              <a href="">{strings.newsEdition}</a>
            </li>
            <li>
              <a href="">{strings.historyOfCreation}</a>
            </li>
            <li>
              <a href="">{strings.advertisement}</a>
            </li>
            <li>
              <a href="">{strings.newspaperIssues}</a>
            </li>
            <li>
              <a href="">{strings.historyOfCreation}</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/news">{strings.news}</Link>
        </li>
        <li className="Language-switcher">
          <LanguageHandler />
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
