import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HeaderComponents, FooterComponents } from "./components/index";
import { RouteComponents } from "./components/routes/index";

function App() {
  return (
    <Router>
      <HeaderComponents.Header />
      <HeaderComponents.Menu />
      <Routes>
        <Route path="/" element={<RouteComponents.Home />} />
        <Route exact path="/about" element={<RouteComponents.AboutDDMA />} />
        <Route exact path="/rectorat" element={<RouteComponents.Rectorat />} />
        <Route exact path="/faculties" element={<RouteComponents.Faculties />} />
        <Route exact path="/subdivisions" element={<RouteComponents.Subdivisions />} />
        <Route exact path="/applicant" element={<RouteComponents.Applicant />} />
        <Route exact path="/science" element={<RouteComponents.Science />} />
        <Route exact path="/forstudents" element={<RouteComponents.ForStudents />} />
        <Route exact path="/graduate" element={<RouteComponents.Graduate />} />
        <Route exact path="/organizations" element={<RouteComponents.Organizations />} />
        <Route exact path="/editorial" element={<RouteComponents.Editorial />} />
        <Route exact path="/news" element={<RouteComponents.News />} />

        <Route exact path="/main/academymagazine" element={<RouteComponents.MainRoutes.Gazeta />} />
        <Route exact path="/main/topnews" element={<RouteComponents.MainRoutes.MainNewsComponent />} />

        <Route exact path="/alerts/solutionscenter" element={<RouteComponents.MainRoutes.SolutionsCenter />} />
        <Route exact path="/alerts/solutionscenter" element={<RouteComponents.MainRoutes.InnovationCenter />} />

        <Route exact path="/about/basicinformation" element={<RouteComponents.AboutDDMARoutes.BasicInformation />} />
        <Route exact path="/about/honor" element={<RouteComponents.AboutDDMARoutes.HonorPage />} />
        <Route exact path="/about/licenses" element={<RouteComponents.AboutDDMARoutes.Licenses />} />
        <Route exact path="/about/highereducation" element={<RouteComponents.AboutDDMARoutes.HigherEducation />} />
        <Route exact path="/about/council" element={<RouteComponents.AboutDDMARoutes.AcademicCouncil />} />
        <Route exact path="/about/regulations" element={<RouteComponents.AboutDDMARoutes.Regulations />} />
        <Route
          exact
          path="/about/generalinformation"
          element={<RouteComponents.AboutDDMARoutes.GeneralInformation />}
        />
        <Route exact path="/about/educationprograms" element={<RouteComponents.AboutDDMARoutes.EducationPrograms />} />
        <Route exact path="/about/estimate" element={<RouteComponents.AboutDDMARoutes.Estimate />} />
        <Route exact path="/about/vacancies" element={<RouteComponents.AboutDDMARoutes.Vacancies />} />
        <Route exact path="/about/history" element={<RouteComponents.AboutDDMARoutes.History />} />
        <Route exact path="/about/contacts" element={<RouteComponents.AboutDDMARoutes.Contacts />} />
      </Routes>
      <FooterComponents.Footer />
    </Router>
  );
}

export default App;
