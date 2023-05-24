import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarPublic from "../../components/navbarpublic";

interface EOI {
    eoiId: string;
    jobRefer: string;
    firstName: string;
    lastName: string;
    streetAddr: string;
    suburb: string;
    state: string;
    postcode: string;
    skills: string;
}

function JobAvailablePublic() {
    return (
        <>
            <NavbarPublic />
            <div className="flex flex-col p-10 m-8 shadow-lg">
                <h1 className="mb-8 text-4xl font-bold">Job Available</h1>
                <div className="flex flex-col">
                    <JobTable />
                </div>
            </div>
        </>
    );
}

function JobTable() {
    const [data, setData] = useState<EOI[]>([]);

    useEffect(() => {
        // Fetch data from the database or API
        fetch("http://localhost:8888/showall.php")
            .then((response) => response.json())
            .then((data: EOI[]) => setData(data))
            .catch((error) => console.error("Error:", error));
    }, []);

    // save ID of the job that user clicked
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const buttonElement = e.target as HTMLButtonElement;
        localStorage.setItem("jobID", buttonElement.id);
    };

    return (
        <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-auto border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                            >
                                Reference Number
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                            >
                                Job Title
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                            >
                                Faculty
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                            >
                                Closing Date
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                            >
                                Location
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                            >
                                Employment Type
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                            >
                                Qualification
                            </th>
                            <th
                                scope="col"
                                className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase"
                            >
                                Apply
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                BF01T
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <Link
                                    to={"/viewsessional"}
                                    className="hover:underline hover:font-bold"
                                >
                                    Tutor (Master Program)
                                </Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Business
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                31/12/2023
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Clayton
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                <p>1 Year Contract</p>
                                <p>Part Time</p>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                Doctorate degree or demonstrable equivalent
                                professional experience is required.
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <Link to={"/applyjob"}>
                                    <button
                                        id="BF01T"
                                        className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
                                        onClick={handleClick}
                                    >
                                        Apply
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                CS01T
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <Link
                                    to={"/viewsessional"}
                                    className="hover:underline hover:font-bold"
                                >
                                    Tutor (Bachelor Program)
                                </Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Computer Science
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                31/12/2023
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Geelong
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                <p>1 Year Contract</p>
                                <p>Part Time</p>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                Master degree with extensive industry experience
                                over many years and tertiary teaching experience
                                are required.
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <Link to={"/applyjob"}>
                                    <button
                                        id="CS01T"
                                        className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
                                        onClick={handleClick}
                                    >
                                        Apply
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                AF01T
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <Link
                                    to={"/viewsessional"}
                                    className="hover:underline hover:font-bold"
                                >
                                    Tutor (Bachelor Program)
                                </Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Business
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                31/12/2023
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Clayton
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                <p>1 Year Contract</p>
                                <p>Part Time</p>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                Master degree with extensive industry experience
                                over many years and tertiary teaching experience
                                are required.
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <Link to={"/applyjob"}>
                                    <button
                                        id="AF01T"
                                        className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
                                        onClick={handleClick}
                                    >
                                        Apply
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                S02L
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <Link
                                    to={"/viewsessional"}
                                    className="hover:underline hover:font-bold"
                                >
                                    Lecturer
                                </Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Computer Science
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                31/12/2023
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Geelong
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                <p>1 Year Contract</p>
                                <p>Part Time</p>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                Doctorate degree or demonstrable equivalent
                                professional experience is required.
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <Link to={"/applyjob"}>
                                    <button
                                        id="S02L"
                                        className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
                                        onClick={handleClick}
                                    >
                                        Apply
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                EF02L
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <Link
                                    to={"/viewsessional"}
                                    className="hover:underline hover:font-bold"
                                >
                                    Lecturer
                                </Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Education
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                31/12/2023
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Clayton
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                <p>1 Year Contract</p>
                                <p>Part Time</p>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                Doctorate degree or demonstrable equivalent
                                professional experience is required.
                            </td>

                            <td className="p-1 px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <Link to={"/applyjob"}>
                                    <button
                                        id="EF02L"
                                        className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
                                        onClick={handleClick}
                                    >
                                        Apply
                                    </button>
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                HS02L
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                <Link
                                    to={"/viewsessional"}
                                    className="hover:underline hover:font-bold"
                                >
                                    Lecturer
                                </Link>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Health Science
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                31/12/2023
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                Geelong
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                <p>1 Year Contract</p>
                                <p>Part Time</p>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800">
                                Doctorate degree or demonstrable equivalent
                                professional experience is required.
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                <Link to={"/applyjob"}>
                                    <button
                                        id="HS02L"
                                        className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
                                        onClick={handleClick}
                                    >
                                        Apply
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                    {/* create pagination if time permits*/}
                </table>
            </div>
            <br />
        </div>
    );
}

export default JobAvailablePublic;

// function Unused() {
// 	// save ID of the job that user clicked
// const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
// 	const buttonElement = e.target as HTMLButtonElement;
// 	localStorage.setItem("jobID", buttonElement.id);
// };

// return (
// 	<div className="p-1.5 w-full inline-block align-middle">
// 		<div className="overflow-auto border rounded-lg">
// 			<table className="min-w-full divide-y divide-gray-200">
// 				<thead className="bg-gray-50">
// 					<tr>
// 						<th
// 							scope="col"
// 							className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
// 						>
// 							Reference Number
// 						</th>
// 						<th
// 							scope="col"
// 							className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
// 						>
// 							Job Title
// 						</th>
// 						<th
// 							scope="col"
// 							className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
// 						>
// 							Faculty
// 						</th>
// 						<th
// 							scope="col"
// 							className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
// 						>
// 							Closing Date
// 						</th>
// 						<th
// 							scope="col"
// 							className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
// 						>
// 							Location
// 						</th>
// 						<th
// 							scope="col"
// 							className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
// 						>
// 							Employment Type
// 						</th>
// 						<th
// 							scope="col"
// 							className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
// 						>
// 							Qualification
// 						</th>
// 						<th
// 							scope="col"
// 							className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
// 						>
// 							Apply
// 						</th>
// 					</tr>
// 				</thead>
// 				<tbody className="divide-y divide-gray-200">
// {
//     data.map((item) => (
//         <tr key={item.eoiId}>
//             <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
//                 {item.eoiId}
//             </td>
//             <td className="px-6 py-4 text-sm text-gray-800">
//                 <Link
//                     to={"/applyjob"}
//                     className="hover:underline hover:font-bold"
//                 >
//                     <button id={item.jobRefer} onClick={handleClick}>
//                         {item.jobRefer}
//                     </button>
//                 </Link>
//             </td>
//             <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
//                 {item.firstName}
//             </td>
//             <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
//                 {item.lastName}
//             </td>
//             <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
//                 {item.streetAddr}
//             </td>
//             <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
//                 {item.suburb}
//             </td>
//             <td className="px-6 py-4 text-sm text-gray-800">{item.state}</td>
//             <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
//                 <Link to={"/applyjob"}>
//                     <button
//                         id={item.jobRefer}
//                         className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
//                         onClick={handleClick}
//                     >
//                         Apply
//                     </button>
//                 </Link>
//             </td>
//         </tr>
//     ));
// }
// <tr>
// 	<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
// 		BF01T
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		<Link
// 			to={"/viewsessional"}
// 			className="hover:underline hover:font-bold"
// 		>
// 			Tutor (Master Program)
// 		</Link>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Business
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		31/12/2023
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Clayton
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		<p>1 Year Contract</p>
// 		<p>Part Time</p>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		Doctorate degree or demonstrable equivalent professional
// 		experience is required.
// 	</td>

// 	<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
// 		<Link to={"/applyjob"}>
// 			<button
// 				id="BF01T"
// 				className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 				onClick={handleClick}
// 			>
// 				Apply
// 			</button>
// 		</Link>
// 	</td>
// </tr>
// <tr>
// 	<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
// 		CS01T
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		<Link
// 			to={"/viewsessional"}
// 			className="hover:underline hover:font-bold"
// 		>
// 			Tutor (Bachelor Program)
// 		</Link>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Computer Science
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		31/12/2023
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Geelong
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		<p>1 Year Contract</p>
// 		<p>Part Time</p>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		Master degree with extensive industry experience over many years
// 		and tertiary teaching experience are required.
// 	</td>

// 	<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
// 		<Link to={"/applyjob"}>
// 			<button
// 				id="CS01T"
// 				className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 				onClick={handleClick}
// 			>
// 				Apply
// 			</button>
// 		</Link>
// 	</td>
// </tr>
// <tr>
// 	<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
// 		AF01T
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		<Link
// 			to={"/viewsessional"}
// 			className="hover:underline hover:font-bold"
// 		>
// 			Tutor (Bachelor Program)
// 		</Link>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Business
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		31/12/2023
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Clayton
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		<p>1 Year Contract</p>
// 		<p>Part Time</p>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		Master degree with extensive industry experience over many years
// 		and tertiary teaching experience are required.
// 	</td>

// 	<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
// 		<Link to={"/applyjob"}>
// 			<button
// 				id="AF01T"
// 				className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 				onClick={handleClick}
// 			>
// 				Apply
// 			</button>
// 		</Link>
// 	</td>
// </tr>
// <tr>
// 	<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
// 		S02L
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		<Link
// 			to={"/viewsessional"}
// 			className="hover:underline hover:font-bold"
// 		>
// 			Lecturer
// 		</Link>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Computer Science
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		31/12/2023
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Geelong
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		<p>1 Year Contract</p>
// 		<p>Part Time</p>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		Doctorate degree or demonstrable equivalent professional
// 		experience is required.
// 	</td>

// 	<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
// 		<Link to={"/applyjob"}>
// 			<button
// 				id="S02L"
// 				className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 				onClick={handleClick}
// 			>
// 				Apply
// 			</button>
// 		</Link>
// 	</td>
// </tr>
// <tr>
// 	<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
// 		EF02L
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		<Link
// 			to={"/viewsessional"}
// 			className="hover:underline hover:font-bold"
// 		>
// 			Lecturer
// 		</Link>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Education
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		31/12/2023
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Clayton
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		<p>1 Year Contract</p>
// 		<p>Part Time</p>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		Doctorate degree or demonstrable equivalent professional
// 		experience is required.
// 	</td>

// 	<td className="p-1 px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
// 		<Link to={"/applyjob"}>
// 			<button
// 				id="EF02L"
// 				className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 				onClick={handleClick}
// 			>
// 				Apply
// 			</button>
// 		</Link>
// 	</td>
// </tr>
// <tr>
// 	<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
// 		HS02L
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		<Link
// 			to={"/viewsessional"}
// 			className="hover:underline hover:font-bold"
// 		>
// 			Lecturer
// 		</Link>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Health Science
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		31/12/2023
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		Geelong
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
// 		<p>1 Year Contract</p>
// 		<p>Part Time</p>
// 	</td>
// 	<td className="px-6 py-4 text-sm text-gray-800">
// 		Doctorate degree or demonstrable equivalent professional
// 		experience is required.
// 	</td>

// 	<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
// 		<Link to={"/applyjob"}>
// 			<button
// 				id="HS02L"
// 				className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 				onClick={handleClick}
// 			>
// 				Apply
// 			</button>
// 		</Link>
// 	</td>
// </tr>
// 				</tbody>
// 				{/* create pagination if time permits*/}
// 			</table>
// 		</div>
// 		<br />
// 	</div>
// );
// }
