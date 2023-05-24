import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { JobList } from "@services/models/job";

 function JobAvailable() {
	const [jobs, setJobs] = useState<any[]>([])
	// const [jobList, setJobList] = useState<JobList.Data[]>()
	const [jobList, setJobList] = useState<Job[]>()
		 
	interface Job {
		refNo: string;
		jobTitle: string;
		faculty	: string;
		closingDate: number;
		location: string;
		employmentType: string;
		qualification: string;
		id: number;
	}

	var data = {
		// email: "test@test.com",
		// password: "password"
		limit: {
			"pageNumber": 1,
			"pageSize": 100
		  }
	  };

	useEffect(() => {
		listJob();
	}, []);

	const listJob = async () => {
		const result = await axios.post('http://localhost:8080/job/list-all');
		setJobs(result.data)
		setJobList(result.data)
		console.log(result.data);
	};
	async function getJobList() {
        const dataList = await axios.post('http://localhost:8080/job/list', data);
        // setJobList(dataList.map(v => ({ key: v.value, ...v })))
        return dataList;
    }

	// save ID of the job that user clicked
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const buttonElement = e.target as HTMLButtonElement;
		localStorage.setItem("jobID", buttonElement.id);
	};
	return (
		<>
			<div className="flex flex-col p-10 m-8 shadow-lg">
				<h1 className="mb-8 text-4xl font-bold">Job Available</h1>
				<div className="flex flex-col">
					<div className="p-1.5 w-full inline-block align-middle">
			<div className="overflow-auto border rounded-lg">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Reference Number
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Job Title
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Faculty
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Closing Date
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Location
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Employment Type
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Qualification
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Apply
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{/* {jobs?.map(item => 
							<tr key={item}>{item.refNo}</tr>
						)} */}
						{/* {Object.values(jobs).map((job, index) => 
						(<p key={index}>Full name: {job.refNo}</p>))} */}
						{jobList?.map((job, index) => (
							<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								{job.refNo}
							</td>
							<td className="px-6 py-4 text-sm text-gray-800">
								<Link
									to={"/viewsessional"}
									className="hover:underline hover:font-bold"
								>
									{job.jobTitle}
								</Link>
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								{job.faculty}
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								{job.closingDate}
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								{job.location}
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								{job.employmentType}
							</td>
							<td className="px-6 py-4 text-sm text-gray-800">
								{job.qualification}
							</td>

							<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
								<Link to={"/applyjob"}>
									<button
										id={job.refNo}
										className="w-full p-1 font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
										onClick={handleClick}
									>
										Apply
									</button>
								</Link>
							</td>
						</tr>
						))} 
					</tbody>
					{/* create pagination if time permits*/}
				</table>
			</div>
			<br />
		</div>
				</div>
			</div>
		</>
	);
}

function JobTable() {
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
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Reference Number
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Job Title
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Faculty
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Closing Date
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Location
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Employment Type
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Qualification
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
							>
								Apply
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{/* <tr>
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
								Doctorate degree or demonstrable equivalent professional
								experience is required.
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
								Master degree with extensive industry experience over many years
								and tertiary teaching experience are required.
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
								Master degree with extensive industry experience over many years
								and tertiary teaching experience are required.
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
								Doctorate degree or demonstrable equivalent professional
								experience is required.
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
								Doctorate degree or demonstrable equivalent professional
								experience is required.
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
								Doctorate degree or demonstrable equivalent professional
								experience is required.
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
						</tr> */}
					</tbody>
					{/* create pagination if time permits*/}
				</table>
			</div>
			<br />
		</div>
	);
}

export default JobAvailable;


function dispatch(arg0: { type: any; data: any; }) {
	throw new Error("Function not implemented.");
}
// function Unused() {
// 	const handleClick = (e) => {
// 		localStorage.setItem("jobID", e.target.id);
// 	};

// 	return (
// 		<div table className="mx-20 mt-10 border-2 border-gray-900 ">
// 			<table className="table-auto">
// 				<thead>
// 					<tr>
// 						<th className="px-4 py-2">Reference Number</th>
// 						<th className="px-4 py-2">Job Title</th>
// 						<th className="px-4 py-2">Faculty</th>
// 						<th className="px-4 py-2">Closing Date</th>
// 						<th className="px-4 py-2">Location</th>
// 						<th className="px-4 py-2">Employment Type</th>
// 						<th className="px-20 py-2">Qualification Requirement</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					<tr>
// 						<td className="px-4 py-2 border border-gray-900">BF01T</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Tutor (Master Program)
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">Business</td>
// 						<td className="px-4 py-2 border border-gray-900">31/12/2023</td>
// 						<td className="px-4 py-2 border border-gray-900">Clayton</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							1 Year Contract<br></br>
// 							Part Time
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Doctorate degree or demonstrable equivalent professional
// 							experience is required.
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							<Link to={"/applyjob"}>
// 								<button
// 									id="BF01T"
// 									className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 									onClick={handleClick}
// 								>
// 									Apply
// 								</button>
// 							</Link>
// 						</td>
// 					</tr>
// 					<tr>
// 						<td className="px-4 py-2 border border-gray-900">CS01T</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Tutor (Bachelor Program)
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Computer Science
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">31/12/2023</td>
// 						<td className="px-4 py-2 border border-gray-900">Geelong</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							1 Year Contract<br></br>Part Time
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Master degree with extensive industry experience over many years
// 							and tertiary teaching experience are required.
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							<Link to={"/applyjob"}>
// 								<button
// 									id="CS01T"
// 									className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 									onClick={handleClick}
// 								>
// 									Apply
// 								</button>
// 							</Link>
// 						</td>
// 					</tr>
// 					<tr>
// 						<td className="px-4 py-2 border border-gray-900">AF01T</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Tutor (Bachelor Program)
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">Art</td>
// 						<td className="px-4 py-2 border border-gray-900">31/12/2023</td>
// 						<td className="px-4 py-2 border border-gray-900">Clayton</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							1 Year Contract<br></br>Part Time
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Master degree with extensive industry experience over many years
// 							and tertiary teaching experience are required.
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							<Link to={"/applyjob"}>
// 								<button
// 									id="AF01T "
// 									className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 									onClick={handleClick}
// 								>
// 									Apply
// 								</button>
// 							</Link>
// 						</td>
// 					</tr>
// 					<tr className="bg-gray-100">
// 						<td className="px-4 py-2 border border-gray-900">CS02L</td>
// 						<td className="px-4 py-2 border border-gray-900">Lecturer</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Computer Science
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">31/12/2023</td>
// 						<td className="px-4 py-2 border border-gray-900">Geelong</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							1 Year Contract<br></br>Part Time
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Doctorate degree or demonstrable equivalent professional
// 							experience is required.
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							<Link to={"/applyjob"}>
// 								<button
// 									id="CS02L"
// 									className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 									onClick={handleClick}
// 								>
// 									Apply
// 								</button>
// 							</Link>
// 						</td>
// 					</tr>
// 					<tr className="bg-gray-100">
// 						<td className="px-4 py-2 border border-gray-900">EF02L</td>
// 						<td className="px-4 py-2 border border-gray-900">Lecturer</td>
// 						<td className="px-4 py-2 border border-gray-900">Education</td>
// 						<td className="px-4 py-2 border border-gray-900">31/12/2023</td>
// 						<td className="px-4 py-2 border border-gray-900">Clayton</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							1 Year Contract<br></br>Part Time
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Doctorate degree or demonstrable equivalent professional
// 							experience is required.
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							<Link to={"/applyjob"}>
// 								<button
// 									id="EF02L"
// 									className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 									onClick={handleClick}
// 								>
// 									Apply
// 								</button>
// 							</Link>
// 						</td>
// 					</tr>
// 					<tr className="bg-gray-100">
// 						<td className="px-4 py-2 border border-gray-900">HS02L</td>
// 						<td className="px-4 py-2 border border-gray-900">Lecturer</td>
// 						<td className="px-4 py-2 border border-gray-900">Health Science</td>
// 						<td className="px-4 py-2 border border-gray-900">31/12/2023</td>
// 						<td className="px-4 py-2 border border-gray-900">Clayton</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							1 Year Contract<br></br>Part Timee
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							Doctorate degree or demonstrable equivalent professional
// 							experience is required.
// 						</td>
// 						<td className="px-4 py-2 border border-gray-900">
// 							<Link to={"/applyjob"}>
// 								<button
// 									id="HS02L"
// 									className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white"
// 									onClick={handleClick}
// 								>
// 									Apply
// 								</button>
// 							</Link>
// 						</td>
// 					</tr>
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// }
