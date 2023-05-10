import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarPublic from "./navbarpublic";
import NavbarSessional from "./navbarsessional";
import NavbarPermanent from "./navbarpermanent";
import Logout from "./logout";

import LandingPublic from "../pages/public/landingpublic";
import JobAvailable from "../pages/public/jobavailable";
import ApplyJob from "../pages/public/applyjob";
import Login from "../pages/public/login";

import LandingSessional from "../pages/sessional/landingsessional";
import Timetable from "../pages/sessional/timetable";
import Availability from "../pages/sessional/availability";

import LandingPermanent from "../pages/permanent/landingpermanent";
import ManageApplication from "../pages/permanent/manageapplication";
import ManagePublish from "../pages/permanent/managepublish";
import ManageSessional from "../pages/permanent/managesessional";
import ViewSessional from "../pages/permanent/viewsessional";
import PublishRequest from "../pages/permanent/publishrequest";

const AppRoutes = () => {
	return (
		<BrowserRouter>
			<NavbarPublic />
			<NavbarSessional />
			<NavbarPermanent />
			<Routes>
				<Route path="/" element={<LandingPublic />} />
				<Route path="/jobavailable" element={<JobAvailable />} />
				<Route path="/applyjob" element={<ApplyJob />} />
				<Route path="/login" element={<Login />} />

				<Route path="/landingsessional" element={<LandingSessional />} />
				<Route path="/timetable" element={<Timetable />} />
				<Route path="/availability" element={<Availability />} />

				<Route path="/landingpermanent" element={<LandingPermanent />} />
				<Route path="/manageapplication" element={<ManageApplication />} />
				{/* <Route path="/managepublish" element={<ManagePublish />} /> */}
				<Route path="/publishrequest" element={<PublishRequest />} />
				<Route path="/managesessional" element={<ManageSessional />} />
				<Route path="/viewsessional" element={<ViewSessional />} />

				<Route path="*">404 Not Found</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
