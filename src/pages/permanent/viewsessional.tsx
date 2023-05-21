import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarPermanent from "../../components/navbarpermanent";

interface EOI {
    eoiId: string;
    jobRefer: string;
    firstName: string;
    lastName: string;
    skills: string;
    streetAddr: string;
    suburb: string;
    emailAddr: string;
    phoneNum: string;
}

function ViewSessional() {
    return (
        <>
            <NavbarPermanent />
            <div className="flex flex-col p-10 m-8 shadow-lg">
                <div className="flex flex-col">
                    <Table />
                </div>
            </div>
        </>
    );
}

function Table() {
    const [data, setData] = useState<EOI[]>([]);
    const [jobID, setJobID] = useState("");

    useEffect(() => {
        fetch("http://localhost:8888/showall.php")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error: " + response.status);
                }
                return response.json();
            })
            .then((data: EOI[]) => setData(data))
            .catch((error) => console.error("Error:", error));

        const storedJobID = localStorage.getItem("jobID");
        if (storedJobID) {
            setJobID(storedJobID);
        }
    }, []);

    const filteredData = data.filter((item) => item.eoiId === jobID);
    return (
        <div className="">
            {filteredData.map((item) => (
                <div key={item.eoiId}>
                    <h1 className="mb-8 text-4xl font-bold">
                        {item.firstName}
                    </h1>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-5/6">
                            <table className="w-full">
                                <tr>
                                    <td className="w-1/4 pb-4">Name:</td>
                                    <td className="w-3/4 pb-4">
                                        {item.firstName}
                                        {item.lastName}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 pb-4">Email:</td>
                                    <td className="w-3/4 pb-4">
                                        {item.emailAddr}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 pb-4">Address:</td>
                                    <td className="w-3/4 pb-4">
                                        {item.streetAddr}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 pb-4">Phone No.:</td>
                                    <td className="w-3/4 pb-4">
                                        {item.phoneNum}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 pb-4">Skill:</td>
                                    <td className="w-3/4 pb-4">
                                        {item.skills}
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 pb-4">Notes 1:</td>
                                    <td className="w-3/4 pb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, voluptatum.
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, voluptatum.
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, voluptatum.
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, voluptatum.
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, voluptatum.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 pb-4">Notes 2:</td>
                                    <td className="w-3/4 pb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, voluptatum.
                                    </td>
                                </tr>
                                <tr>
                                    <td className="w-1/4 pb-4">Notes 3:</td>
                                    <td className="w-3/4 pb-4">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Quisquam, voluptatum.
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <div className="flex flex-col w-1/6">
                            {/* <Link to={"/contact"}>
						<button className="w-full p-2 m-2 text-lg font-bold text-white bg-green-500 rounded shadow-lg hover:bg-green-500 hover:text-black">
							Contact
						</button>
					</Link> */}
                            <Link to={"/accept"}>
                                <button className="w-full p-2 m-2 text-lg font-bold text-white bg-green-500 rounded shadow-lg hover:bg-green-500 hover:text-black">
                                    Accept
                                </button>
                            </Link>
                            <Link to={"/decline"}>
                                <button className="w-full p-2 m-2 text-lg font-bold text-white bg-red-500 rounded shadow-lg hover:bg-red-500 hover:text-black">
                                    Decline
                                </button>
                            </Link>

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
