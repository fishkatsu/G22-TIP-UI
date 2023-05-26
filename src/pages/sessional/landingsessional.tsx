import React from "react";
import { Link } from "react-router-dom";
import NavbarSessional from "../../components/navbarsessional";

function LandingSessional() {
    const userId = localStorage.getItem("userId");
    console.log(userId);
    return (
        <div className="">
            <NavbarSessional />
            <Card />
        </div>
    );
}

function Card() {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-10 m-8 bg-gray-100 shadow-lg">
                <h1 className="mb-4 text-4xl font-bold">Welcome John</h1>
                <div className="flex flex-wrap justify-center">
                    <Link to={"/timetable"} className="">
                        <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
                            <h1 className="mb-4 text-2xl font-bold uppercase">
                                Timetable
                            </h1>
                            <p className="text-lg">View your timetable.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LandingSessional;
