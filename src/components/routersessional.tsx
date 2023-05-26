import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarSessional from "./navbarsessional";
import Logout from "./logout";

import LandingSessional from "../pages/sessional/landingsessional";
import Timetable from "../pages/sessional/timetable";

const SessionalRoutes = () => {
    return (
        <BrowserRouter>
            <NavbarSessional />
            <Routes>
                <Route
                    path="/landingsessional"
                    element={<LandingSessional />}
                />
                <Route path="/timetable" element={<Timetable />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*">404 Not Found</Route>
            </Routes>
        </BrowserRouter>
    );
};

export default SessionalRoutes;
