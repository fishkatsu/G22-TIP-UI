import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarPermanent from "../../components/navbarpermanent";

interface EOI {
    SID: string;
    StaffFname: string;
    StaffLname: string;
    Title: string;
    Types: string;
    Email: string;
}

export default function ManageApplication() {
    return (
        <>
            <NavbarPermanent />
            <div className="flex flex-col p-10 m-8 shadow-lg">
                <h1 className="mb-10 text-4xl font-bold">Manage Sessional</h1>
                <div className="flex flex-col">
                    <Table />
                </div>
            </div>
        </>
    );
}

function Table() {
    const [data, setData] = useState<EOI[]>([]);

    useEffect(() => {
        fetch("http://localhost:8888/staff.php")
            .then((response) => response.json())
            .then((data: EOI[]) => {
                // Filter the data to show only entries with "Sessional" in the Types field
                const filteredData = data.filter(
                    (item) => item.Types === "Sessional"
                );
                setData(filteredData);
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    const handleClick = (jobID: string) => {
        // Store jobID in localStorage
        localStorage.setItem("sessID", jobID);
    };

    return (
        <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
                <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                >
                                    ID
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                >
                                    Email
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                                >
                                    Title
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map((item) => (
                                <tr key={item.SID}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {item.SID}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <Link
                                            to={{
                                                pathname: "/viewsessional",
                                            }}
                                        >
                                            <button
                                                className="hover:underline"
                                                onClick={(e) =>
                                                    handleClick(item.SID)
                                                }
                                                id={item.SID}
                                            >
                                                {item.StaffFname}{" "}
                                                {item.StaffLname}
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.Email}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.Title}
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
