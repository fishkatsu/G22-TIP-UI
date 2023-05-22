import React, { useState, useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import NavbarPermanent from "../../components/navbarpermanent";

interface School {
    SFrom: string;
    STo: string;
    SName: string;
    Qualification: string;
}
interface WorkExperience {
    WFrom: string;
    WTo: string;
    CName: string;
    Position: string;
}

interface Applications {
    applyNum: string;
    jobrefNum: string;
    firstname: string;
    lastname: string;
    gender: string;
    dob: string;
    street: string;
    suburb: string;
    state: string;
    postcode: string;
    phone: string;
    email: string;
    availability: string;
    status: string;
    schools: School[];
    WorkExperience: WorkExperience[];
}

function ViewSessional() {
    const location = useLocation();
    const [data, setData] = useState<Applications[]>([]);
    const [jobID, setJobID] = useState("");

    useEffect(() => {
        fetch("http://localhost:8888/viewsessional.php")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error: " + response.status);
                }
                return response.json();
            })
            .then((data: Applications[]) => setData(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    useEffect(() => {
        const storedJobID = localStorage.getItem("jobID");
        if (storedJobID) {
            setJobID(storedJobID);
        } else if (
            location.state &&
            (location.state as { applyNum: string }).applyNum
        ) {
            setJobID((location.state as { applyNum: string }).applyNum);
        }
    }, [location.state]);

    const filteredData = data.filter((item) => item.applyNum === jobID);

    return (
        <>
            <NavbarPermanent />
            <div className="flex flex-col p-10 m-8 shadow-lg">
                <div className="flex flex-col">
                    <Table data={filteredData} />
                </div>
            </div>
        </>
    );
}

function Table({ data }: { data: Applications[] }) {
    const handleClick = (action: string, applyNum: string, jobId: string) => {
        // Store jobID in localStorage
        localStorage.setItem("jobID", jobId);

        // Make API call to update the status
        fetch(
            `http://localhost:8888/updatestatus.php?action=${action}&applyNum=${applyNum}`
        )
            .then((response) => response.json())
            .then((data) => {
                // Handle the response as needed
                console.log(data);
                if (action === "accept") {
                    alert("Application accepted");
                    // Navigate to /manageapplication after user clicks "OK" on the alert box
                    window.location.href = "/manageapplication";
                } else if (action === "decline") {
                    alert("Application rejected");
                    // Navigate to /manageapplication after user clicks "OK" on the alert box
                    window.location.href = "/manageapplication";
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                // Handle error case
            });
    };

    return (
        <div className="">
            {data.map((item) => (
                <div key={item.applyNum}>
                    <h1 className="mb-8 text-4xl font-bold">
                        {item.firstname} {item.lastname}
                    </h1>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-5/6">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="w-1/4 pb-4 font-bold">
                                            Jobref No:
                                        </td>
                                        <td className="w-3/4 pb-4">
                                            {item.jobrefNum}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/4 pb-4 font-bold">
                                            Email:
                                        </td>
                                        <td className="w-3/4 pb-4">
                                            {item.email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/4 pb-4 font-bold">
                                            Address:
                                        </td>
                                        <td className="w-3/4 pb-4">
                                            {item.street}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/4 pb-4 font-bold">
                                            Phone No.:
                                        </td>
                                        <td className="w-3/4 pb-4">
                                            {item.phone}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/4 pb-4 font-bold align-top">
                                            School :
                                        </td>
                                        <td className="w-3/4">
                                            {item.schools.map((school) => (
                                                <table
                                                    key={school.SName}
                                                    className="w-full mb-4"
                                                >
                                                    <tbody>
                                                        <tr>
                                                            <td className="w-1/4 pb-4">
                                                                Start From:
                                                            </td>
                                                            <td className="w-3/4 pb-4">
                                                                {school.SFrom}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="w-1/4 pb-4">
                                                                End To:
                                                            </td>
                                                            <td className="w-3/4 pb-4">
                                                                {school.STo}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="w-1/4 pb-4">
                                                                School Name:
                                                            </td>
                                                            <td className="w-3/4 pb-4">
                                                                {school.SName}
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="w-1/4 pb-4">
                                                                Qualification:
                                                            </td>
                                                            <td className="w-3/4 pb-4">
                                                                {
                                                                    school.Qualification
                                                                }
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            ))}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/4 pb-4 font-bold align-top">
                                            Work Experience:
                                        </td>
                                        <td className="w-3/4">
                                            {item.WorkExperience?.map(
                                                (experience) => (
                                                    <table
                                                        key={experience.CName}
                                                        className="w-full"
                                                    >
                                                        <tbody>
                                                            <tr>
                                                                <td className="w-1/4 pb-4">
                                                                    Start From:
                                                                </td>
                                                                <td className="w-3/4 pb-4">
                                                                    {
                                                                        experience.WFrom
                                                                    }
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="w-1/4 pb-4">
                                                                    End To:
                                                                </td>
                                                                <td className="w-3/4 pb-4">
                                                                    {
                                                                        experience.WTo
                                                                    }
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="w-1/4 pb-4">
                                                                    Company
                                                                    Name:
                                                                </td>
                                                                <td className="w-3/4 pb-4">
                                                                    {
                                                                        experience.CName
                                                                    }
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="w-1/4 pb-4">
                                                                    Position:
                                                                </td>
                                                                <td className="w-3/4 pb-4">
                                                                    {
                                                                        experience.Position
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                )
                                            )}
                                        </td>
                                    </tr>

                                    {/* <tr>
                                        <td className="w-1/4 pb-4 font-bold">
                                            Status :
                                        </td>
                                        <td className="w-3/4 pb-4">
                                            {item.status}
                                        </td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col w-1/6">
                            <button
                                className="w-full p-2 m-2 text-lg font-bold text-white bg-green-500 rounded shadow-lg hover:bg-green-500 hover:text-black"
                                onClick={(e) =>
                                    handleClick(
                                        "accept",
                                        item.applyNum,
                                        e.currentTarget.id
                                    )
                                }
                                id={item.jobrefNum}
                            >
                                Accept
                            </button>
                            <button
                                className="w-full p-2 m-2 text-lg font-bold text-white bg-red-500 rounded shadow-lg hover:bg-red-500 hover:text-black"
                                onClick={(e) =>
                                    handleClick(
                                        "decline",
                                        item.applyNum,
                                        e.currentTarget.id
                                    )
                                }
                                id={item.jobrefNum}
                            >
                                Decline
                            </button>

                            <Link to={"/manageapplication"}>
                                <button className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-500 hover:text-black">
                                    Back
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ViewSessional;
