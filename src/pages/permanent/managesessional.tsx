import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarPermanent from "../../components/navbarpermanent";
import axios from "axios";

interface Application {
    id: number;
    refNo: string;
    firstName: string;
    lastName: string;
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
    Title: string;
}

function ManageSessional() {
    return (
        <>
            <NavbarPermanent />
            <div className="flex flex-col p-10 m-8 shadow-lg">
                <h1 className="mb-10 text-4xl font-bold">Manage Sessional</h1>
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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
		listSessional();
    }, []);

    const listSessional = async () => {
		const result = await axios.post('http://localhost:8080/application/list-sessional');
		setData(result.data)
		// setJobList(result.data)
		console.log(result.data);
	};

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
                                    Job Ref Number
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    Email Address
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {data.map((item) => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        <Link to={"/viewsessional"}>
                                            <button
                                                className="hover:underline"
                                                onClick={(e) =>
                                                    handleClick(
                                                        "",
                                                        item.id+"",
                                                        e.currentTarget.id
                                                    )
                                                }
                                                // id={item.id}
                                            >
                                                {item.refNo}
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.firstName} {item.lastName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.email}
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

export default ManageSessional;
