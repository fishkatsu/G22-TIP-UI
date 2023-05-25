import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarPermanent from "../../components/navbarpermanent";
import { async } from "q";
import axios from "axios";
interface Application {
    // applyNum: string;
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
}

export default function ManageApplication() {

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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
		listJob();
	}, []);

	const listJob = async () => {
		const result = await axios.post('http://localhost:8080/application/list');
		setData(result.data)
		// setJobList(result.data)
		console.log(result.data);
	};
    // useEffect(() => {
    //     fetch("http://localhost:8888/manageapplication.php")
    //         .then((response) => response.json())
    //         .then((data: Application[]) => {
    //             // Filter the data array based on status
    //             const filteredData = data.filter(
    //                 (item) =>
    //                     item.status === "New" ||
    //                     item.status === "Accepted" ||
    //                     item.status === "Rejected"
    //             );
    //             setData(filteredData);
    //         })
    //         .catch((error) => console.error("Error:", error));
    // }, []);
    const handleClick = async (action: string, id: number, jobId: string) => {
        // Store jobID in localStorage
        localStorage.setItem("jobID", jobId);
        setLoading(true);
        console.log("id", id);
        console.log("action", action);

        try {
        // Make API call to update the status
        const response = await axios.post(`http://localhost:8080/application/update-status`, {
                applicationId: id,
                status: action
            });
            console.log("response", response.data);
            const data = response.data;

            if (data.result === "accept") {
                alert("Application accepted");
            } else if (data.result === "decline") {
                alert("Application rejected");
            }
    } catch {
        console.error("error");
        // alert("Unsuccessful login, please try again");
    } finally{
        setLoading(false);
		listJob();
    }};

    const handleClick1 = (action: string, applyNum: string, jobId: string) => {
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
                                {/* <th
                                    scope="col"
                                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                    whattofill
                                </th> */}
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
                                <tr key={item.id}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-bold text-gray-800 whitespace-nowrap">
                                        <Link to={"/viewsessionalapply"}>
                                            <button
                                                className="hover:underline"
                                                onClick={(e) =>
                                                    handleClick(
                                                        "",
                                                        item.id,
                                                        e.currentTarget.id
                                                    )
                                                }
                                                id={item.id+""}
                                            >
                                                {item.refNo}
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.firstName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.lastName}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.email}
                                    </td>
                                    {/* <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.suburb}
                                    </td> */}
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {item.status}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        <button
                                            className="w-full p-1 text-white bg-green-500 rounded shadow-lg text-m hover:bg-green-700"
                                            id={item.id+""}
                                            onClick={(e) =>
                                                handleClick(
                                                    "accept",
                                                    item.id,
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
                                                    item.id,
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