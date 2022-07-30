import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";

import { NavBar } from "./NavBar";

export const MainApp: React.FC = () => {
  return (
    <section className="MainApp">
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <NavBar />
            <hr />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="about" element={<AboutPage />} />
              {/* <Route path="/*" element={<LoginPage />} /> */}
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </div>
    </section>
  );
};
