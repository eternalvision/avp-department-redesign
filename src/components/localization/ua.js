import { menuItems, mainItems } from "./json/index";

const ua = {
  //! dataTitle
  title: `${menuItems.dataTitle.title}`,
  home: `${menuItems.dataTitle.toHome}`,
  advertisement: `${menuItems.dataTitle.advertisement}`,
  applicant: `${menuItems.dataTitle.applicant}`,
  programs: `${menuItems.dataTitle.programs}`,
  curricula: `${menuItems.dataTitle.curricula}`,
  methodologicalSupport: `${menuItems.dataTitle.methodologicalSupport}`,
  magistracy: `${menuItems.dataTitle.magistracy}`,
  topicsOfQualificationWorks: `${menuItems.dataTitle.topicsOfQualificationWorks}`,
  materialBase: `${menuItems.dataTitle.materialBase}`,
  automationCenterAndCit: `${menuItems.dataTitle.automationCenterAndCit}`,
  other: `${menuItems.dataTitle.other}`,
  upButton: `${menuItems.dataTitle.upButton}`,
  //! applicant
  automatizationAndCit: `${menuItems.dataApplicant.automatizationAndCit}`,
  cit: `${menuItems.dataApplicant.cit}`,
  //! programs
  workingPrograms: `${menuItems.dataPrograms.workingPrograms}`,
  scientificPrograms: `${menuItems.dataPrograms.scientificPrograms}`,
  //! curricula
  conditionsOfEntry: `${menuItems.dataApplicant.conditionsOfEntry}`,
  graduatesOfSecondarySchools: `${menuItems.dataApplicant.graduatesOfSecondarySchools}`,
  //! mainTitles
  news: `${mainItems.dataMainTitles.news}`,
  alerts: `${mainItems.dataMainTitles.alerts}`,
  otherTitle: `${mainItems.dataMainTitles.otherInformation}`,
};
export default ua;
