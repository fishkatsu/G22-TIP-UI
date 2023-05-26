import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarSessional from "../../components/navbarsessional";

interface TimetableData {
    date: string;
    unit: string;
    time: string;
    location: string;
}

function Timetable() {
    return (
        <>
            <NavbarSessional />
            <div className="flex flex-col p-10 m-8 shadow-lg">
                <h1 className="mb-8 text-4xl font-bold">Timetable</h1>
                <div className="flex flex-col">
                    <ThisWeek />
                </div>
            </div>
        </>
    );
}

function ThisWeek() {
    const [timetableData, setTimetableData] = useState<TimetableData[]>([]);

    useEffect(() => {
        const applyNum = localStorage.getItem("userId");
        fetch(`http://localhost:8888/TimeTable.php?applyNum=${applyNum}`)
            .then((response) => response.json())
            .then((data) => {
                setTimetableData(data);
            })
            .catch((error) => {
                console.error("", error);
                // Handle error case
                alert("An error occurred. Please try again later.");
            });
    }, []);
    console.log(localStorage.getItem("userId"));
    return (
        <div>
            <div className="mb-10 overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                            >
                                No.
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                            >
                                Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                            >
                                Class Name
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                            >
                                Time
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase"
                            >
                                Class
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {timetableData.map((row, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {row.date}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {row.unit}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {row.time}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {row.location}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Timetable;
