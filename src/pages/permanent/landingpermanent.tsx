import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarPermanent from "../../components/navbarpermanent";
interface EOI {
    eoiId: string;
    jobRefer: string;
    firstName: string;
    lastName: string;
    skills: string;
}

function LandingPermanent() {
    const [data, setData] = useState<EOI[]>([]);

    useEffect(() => {
        fetch("http://localhost:8888/showall.php")
            .then((response) => response.json())
            .then((data: EOI[]) => setData(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div>
            <NavbarPermanent />
            <Card />
        </div>
    );
}

function Card() {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-10 m-8 bg-gray-100 shadow-lg">
                <h1 className="mb-4 text-4xl font-bold">Welcome John</h1>
                <div className="flex flex-row items-center justify-center">
                    <Link to={"/manageapplication"} className="">
                        <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
                            <h1 className="mb-4 text-2xl font-bold uppercase">
                                Application
                            </h1>
                            <p className="mb-8 text-lg">
                                Check data of application from sessional staff.
                            </p>
                        </div>
                    </Link>
                    <Link to={"/managesessional"} className="">
                        <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
                            <h1 className="mb-4 text-2xl font-bold uppercase">
                                Sessional Staff
                            </h1>
                            <p className="mb-8 text-lg">
                                Check data of sessional staff.
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default LandingPermanent;
