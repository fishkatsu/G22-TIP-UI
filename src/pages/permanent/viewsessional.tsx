import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarPermanent from "../../components/navbarpermanent";

interface Applications {
    SID: string;
    StaffFname: string;
    StaffLname: string;
    Title: string;
    Types: string;
    Email: string;
}

function ViewSessional() {
    const location = useLocation();
    const [data, setData] = useState<Applications[]>([]);
    const [jobID, setJobID] = useState("");

    useEffect(() => {
        const storedSessID = localStorage.getItem("sessID");
        if (storedSessID) {
            setJobID(storedSessID);
        } else if (
            location.state &&
            (location.state as { sessID: string }).sessID
        ) {
            setJobID((location.state as { sessID: string }).sessID);
        }
    }, [location.state]);

    useEffect(() => {
        fetch(`http://localhost:8888/staff.php?sessID=${jobID}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Error: " + response.status);
                }
                return response.json();
            })
            .then((data: Applications[]) => setData(data))
            .catch((error) => console.error("Error:", error));
        console.log(jobID);
    }, [jobID]);

    return (
        <>
            <NavbarPermanent />
            <div className="flex flex-col p-10 m-8 shadow-lg">
                <div className="flex flex-col">
                    <Table data={data} jobID={jobID} />
                </div>
            </div>
        </>
    );
}

function Table({ data, jobID }: { data: Applications[]; jobID: string }) {
    // Filter the data based on the jobID
    const filteredData = data.filter((item) => item.SID === jobID);

    return (
        <div className="">
            {filteredData.map((item) => (
                <div key={item.SID}>
                    <h1 className="mb-8 text-4xl font-bold">
                        {item.StaffFname} {item.StaffLname}
                    </h1>
                    <div className="flex flex-row">
                        <div className="flex flex-col w-5/6">
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="w-1/4 pb-4">
                                            Jobref No:
                                        </td>
                                        <td className="w-3/4 pb-4">
                                            {item.SID}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/4 pb-4">Email:</td>
                                        <td className="w-3/4 pb-4">
                                            {item.Email}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/4 pb-4">Title:</td>
                                        <td className="w-3/4 pb-4">
                                            {item.Title}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="w-1/4 pb-4">Notes 1:</td>
                                        <td className="w-3/4 pb-4">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Quisquam, voluptatum.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="w-1/4 pb-4">Notes 2:</td>
                                        <td className="w-3/4 pb-4">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Quisquam, voluptatum.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col w-1/6">
                            <Link to={"/managesessional"}>
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
