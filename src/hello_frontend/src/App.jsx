import { useState } from "react";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Home from "./screens/Home";
import Login from "./screens/Login";
import JoinUs from "./screens/JoinUs";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./screens/globals/Topbar";

import ProDashboard from "./screens/prodashboard";
import NgoDashboard from "./screens/ngodashboard";
import Dashboard from "./screens/dashboard";
import Team from "./screens/team";
import Invoices from "./screens/invoices";
import Contacts from "./screens/contacts";
import Bar from "./screens/bar";
import AddHoreca from "./screens/addhoreca";
import Line from "./screens/line";
import Pie from "./screens/pie";

import Geography from "./screens/geography";
import Sidebar from "./screens/globals/Sidebar";
import NgoSidebar from "./screens/globals/NgoSidebar";
import Calendar from "./screens/calendar";

import Horeca from "./screens/Horeca";
import PremiumFeatures from "./screens/premium";
import EateryForm from "./screens/eateryform";
import ListFood from "./listfood";
import SignUp from "./screens/SignUp";
import ChatUI from "./screens/chat";
import Contact from "./screens/Contact";

import NGOs from "./screens/Ngos";

const App = () => {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [isNgoSidebar, setIsNgoSidebar] = useState(true);

  const location = useLocation();
  const ngolocation = useLocation();

  const allowedRoutes = [
    "/prodashboard",
    "/dashboard",
    "/team",
    "/chat",
    "/eateryform",
    "/contacts",
    "/invoices",
    "/premium",
    "/form",
    "/addhoreca",
    "/Ngos",

    "/bar",

    "/pie",
    "/line",
    "/calendar",
    "/geography",
  ];

  const ngoallowedRoutes = [
    "/ngocalendar",
    "/ngodashboard",
    "/listngoHoreca",
    "/ngocontacts",
    "/ngoinvoices",
    "/ngochat",
    "/listfood",
    "/listHoreca",
  ];

  const shouldDisplaySidebarAndTopbar = allowedRoutes.includes(
    location.pathname
  );

  const shouldDisplayNgoSidebarAndTopbar = ngoallowedRoutes.includes(
    ngolocation.pathname
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* reset the css to default */}
        <div className="App">
          {shouldDisplaySidebarAndTopbar && <Sidebar isSidebar={isSidebar} />}
          {shouldDisplayNgoSidebarAndTopbar && (
            <NgoSidebar isNgoSidebar={isNgoSidebar} />
          )}
          <main className="content">
            {shouldDisplaySidebarAndTopbar && (
              <Topbar setIsSidebar={setIsSidebar} />
            )}
            {shouldDisplayNgoSidebarAndTopbar && (
              <Topbar setIsNgoSidebar={setIsNgoSidebar} />
            )}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/joinUs" element={<JoinUs />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signup/:type" element={<SignUp />} />

              <Route path="/Ngos" element={<NGOs />} />

              <Route path="/premium" element={<PremiumFeatures />} />
              <Route path="/ngodashboard" element={<NgoDashboard />} />
              <Route path="/eateryform" element={<EateryForm />} />
              <Route path="/prodashboard" element={<ProDashboard />} />
              <Route path="/listfood" element={<ListFood />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/chat" element={<ChatUI />} />

              <Route path="/chat" element={<ChatUI />} />
              <Route path="/ngochat" element={<ChatUI />} />
      
         

              <Route path="/contacts" element={<Contacts />} />
              <Route path="/ngocontacts" element={<Contacts />} />

              <Route path="/invoices" element={<Invoices />} />
              <Route path="/ngoinvoices" element={<Invoices />} />

              <Route path="/addhoreca" element={<AddHoreca />} />
              <Route path="/listHoreca" element={<Horeca />} />
              <Route path="/listngoHoreca" element={<Horeca />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />

              <Route path="/line" element={<Line />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/ngocalendar" element={<Calendar />} />

              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
