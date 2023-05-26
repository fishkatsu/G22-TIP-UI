import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarPermanent from "./navbarpermanent";
import Logout from "./logout";

import LandingPermanent from "../pages/permanent/landingpermanent";
import ManageApplication from "../pages/permanent/manageapplication";
import ManageSessional from "../pages/permanent/managesessional";
import ViewSessional from "../pages/permanent/viewsessionalapply";

const PermanentRoutes = () => {
    return (
        <BrowserRouter>
            <NavbarPermanent />
            <Routes>
                <Route
                    path="/landingpermanent"
                    element={<LandingPermanent />}
                />
                <Route
                    path="/manageapplication"
                    element={<ManageApplication />}
                />
                <Route path="/managesessional" element={<ManageSessional />} />
                <Route path="/viewsessional" element={<ViewSessional />} />
                <Route path="/logout" element={<Logout />} />

                <Route path="*">404 Not Found</Route>
            </Routes>
        </BrowserRouter>
    );
};

export default PermanentRoutes;
