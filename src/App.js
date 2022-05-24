import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeaderComponents, MainComponents, FooterComponents } from "./components/index";
import { RouteComponents } from "./components/routes/index";

function App() {
  return (
    <Router>
      <HeaderComponents.Header />
      <HeaderComponents.Menu />
      <Routes>
        <Route path="/" element={<RouteComponents.Home />} />
        <Route exact path="/advertisement" element={<RouteComponents.TitleRoutes.Advertisement />} />

        <Route exact path="/applicant" element={<RouteComponents.TitleRoutes.Applicant />} />
        <Route
          exact
          path="/applicant/automatization-and-cit"
          element={<RouteComponents.ApplicantRoutes.AutomatizationAndCit />}
        />
        <Route exact path="/applicant/cit" element={<RouteComponents.ApplicantRoutes.Cit />} />

        <Route exact path="/programs" element={<RouteComponents.TitleRoutes.Programs />} />
        <Route exact path="/programs/working-programs" element={<RouteComponents.ProgramsRoutes.WorkingPrograms />} />
        <Route
          exact
          path="/programs/scientific-programs"
          element={<RouteComponents.ProgramsRoutes.ScientificPrograms />}
        />

        <Route exact path="/curricula" element={<RouteComponents.TitleRoutes.Curricula />} />
        <Route
          exact
          path="/curricula/automatization-and-cit"
          element={<RouteComponents.CurriculaRoutes.AutomatizationAndCit />}
        />
        <Route exact path="/curricula/cit" element={<RouteComponents.CurriculaRoutes.Cit />} />

        <Route exact path="/methodological-support" element={<RouteComponents.TitleRoutes.MethodologicalSupport />} />
        <Route exact path="/magistracy" element={<RouteComponents.TitleRoutes.Magistracy />} />
        <Route
          exact
          path="/topics-of-qualification-works"
          element={<RouteComponents.TitleRoutes.TopicsOfQualificationWorks />}
        />
        <Route exact path="/material-base" element={<RouteComponents.TitleRoutes.MaterialBase />} />
        <Route
          exact
          path="/automation-center-and-cit"
          element={<RouteComponents.TitleRoutes.AutomationCenterAndCit />}
        />
        <Route exact path="/other" element={<RouteComponents.TitleRoutes.Other />} />

        <Route exact path="/academymagazine" element={<RouteComponents.MainRoutes.Gazeta />} />
        <Route exact path="/topnews/:id" element={<RouteComponents.MainRoutes.MainNewsComponent />} />
        <Route exact path="/news" element={<MainComponents.NewsComponents.AllNews />} />
        <Route exact path="/alertsnews" element={<MainComponents.NewsComponents.AllAlerts />} />
        <Route exact path="/news/:id" element={<RouteComponents.MainRoutes.NewsComponent />} />
        <Route exact path="/alertsnews/:id" element={<RouteComponents.MainRoutes.AlertsComponent />} />
      </Routes>
      <FooterComponents.Footer />
    </Router>
  );
}

export default App;
