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
          <a href="/">Головна</a>
          <ul className="submenu"></ul>
        </li>
        <li>
          <Link to="/about">{strings.aboutDDMA}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.basicInformation}</a>
            </li>
            <li>
              <a href="">{strings.honorPage}</a>
            </li>
            <li>
              <a href="">{strings.licensesAndCertificates}</a>
            </li>
            <li>
              <a href="">{strings.documentsOnHigherEducation}</a>
            </li>
            <li>
              <a href="">{strings.academicCouncil}</a>
            </li>
            <li>
              <a href="">{strings.regulations}</a>
            </li>
            <li>
              <a href="">{strings.generalAndPublicInformation}</a>
            </li>
            <li>
              <a href="">{strings.educationalProgramsAndCurricula}</a>
            </li>
            <li>
              <a href="">{strings.estimateAndFinancialReport}</a>
            </li>
            <li>
              <a href="">{strings.vacancies}</a>
            </li>
            <li>
              <a href="">{strings.history}</a>
            </li>
            <li>
              <a href="">{strings.contacts}</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/rectorat">{strings.rectorate}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.electionOfTheRector}</a>
            </li>
            <li>
              <a href="">{strings.theCompositionOfTheAdministration}</a>
            </li>
            <li>
              <a href="">{strings.rectorsAddress}</a>
            </li>
            <li>
              <a href="">{strings.functionsOfTheRectorate}</a>
            </li>
            <li>
              <a href="">{strings.rectorsGallery}</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/faculties">{strings.faculties}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.appAndIt}</a>
            </li>
            <li>
              <a href="">{strings.itAndEquipment}</a>
            </li>
            <li>
              <a href="">{strings.fM}</a>
            </li>
            <li>
              <a href="">{strings.economicsAndManagement}</a>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/subdivisions">{strings.subdivisions}</Link>
          <ul className="submenu">
            <li>
              <a href="">{strings.centerForDistanceAndDistanceEducation}</a>
            </li>
            <li>
              <a href="">{strings.itSolutionsCenter}</a>
            </li>
            <li>
              <a href="">{strings.vspKfkPitbDsea}</a>
            </li>
            <li>
              <a href="">{strings.library}</a>
            </li>
            <li>
              <a href="">{strings.dtDdma}</a>
            </li>
            <li>
              <a href="">{strings.departmentsAndServices}</a>
            </li>
            <li>
              <a href="">{strings.tenderCommittee}</a>
            </li>
            <li>
              <a href="">{strings.departmentOfInternalQualityAssuranceInHigherEducation}</a>
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
