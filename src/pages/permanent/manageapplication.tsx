import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarPermanent from "../../components/navbarpermanent";

interface Application {
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
}

function ManageApplication() {
    return (
        <>
            <NavbarPermanent />
            <div className="flex flex-col p-10 m-8 shadow-lg">
                <h1 className="mb-10 text-4xl font-bold">Manage Applicant</h1>
                <div className="flex flex-col">
                    <TableC />
                    {/* <Link to={"/viewsessional"}>
                        Sessional Page test button
                    </Link> */}
                </div>
            </div>
        </>
    );
}

function TableC() {
    const [data, setData] = useState<Application[]>([]);

    useEffect(() => {
        fetch("http://localhost:8888/manageapplication.php")
            .then((response) => response.json())
            .then((data: Application[]) => {
                const filteredData = data.filter(
                    (item) =>
                        item.status === "New" ||
                        item.status === "Accepted" ||
                        item.status === "Rejected"
                );
                setData(filteredData);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    const handleClick = (action: string, applyNum: string, jobId: string) => {
        localStorage.setItem("jobID", jobId);

        fetch(
            `http://localhost:8888/updatestatus.php?action=${action}&applyNum=${applyNum}`
        )
            .then((response) => response.json())
            .then((data) => {
                // Handle the response as needed
                console.log(data);
                if (action === "accept") {
                    alert("Application accepted");
                } else if (action === "decline") {
                    alert("Application rejected");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                // Handle error case
            });
    };

    return (
        <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-auto border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Job Ref
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    First Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Last Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Email Address
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Availability
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Edit
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map((item) => (
                                <tr key={item.applyNum}>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-800 whitespace-nowrap">
                                        <Link to={"/viewsessionalapply"}>
                                            <button
                                                className="hover:underline"
                                                onClick={(e) =>
                                                    handleClick(
                                                        "",
                                                        item.applyNum,
                                                        e.currentTarget.id
                                                    )
                                                }
                                                id={item.applyNum}
                                            >
                                                {item.applyNum}
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.jobrefNum}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.firstname}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.lastname}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.availability}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.status}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <button
                                            className="w-full p-1 text-white bg-green-500 rounded shadow-lg text-m hover:bg-green-700"
                                            id={item.applyNum}
                                            onClick={(e) =>
                                                handleClick(
                                                    "accept",
                                                    item.applyNum,
                                                    e.currentTarget.id
                                                )
                                            }
                                        >
                                            Accept
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <button
                                            className="w-full p-1 text-white bg-red-500 rounded shadow-lg text-m hover:bg-red-700"
                                            onClick={(e) =>
                                                handleClick(
                                                    "decline",
                                                    item.applyNum,
                                                    e.currentTarget.id
                                                )
                                            }
                                        >
                                            Decline
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <br />
            </div>
        </div>
    );
}

export default ManageApplication;
