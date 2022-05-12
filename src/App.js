import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RouteComponents } from "./components/routes/index";

function App() {
  return (
    <Router>
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
      </Routes>
    </Router>
  );
}

export default App;
