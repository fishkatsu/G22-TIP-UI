import React, { useEffect, useState } from "react";

function ApplyJob() {
	return (
		<>
			<form action="">
				<div className="flex flex-col p-10 m-8 shadow-lg">
					<h1 className="mb-10 text-4xl font-bold">Application Form</h1>
					<div className="flex flex-col">
						<ReferenceNumber />
						<PersonalDetail />
						<EducationalBackground />
						<JobExperience />
						<ProfRecognition />
						<TimeAvailability />
						<Password />
						<Button />
					</div>
				</div>
			</form>
		</>
	);
}

function ReferenceNumber() {
	const [jobID, setJobID] = useState("");

	useEffect(() => {
		const storedJobID = localStorage.getItem("jobID");
		if (storedJobID) {
			setJobID(storedJobID);
		}
	}, []);

	return (
		<>
			<div className="flex flex-wrap w-full mb-8 p-1.5">
				<div className="w-1/8">
					<label className="text-lg font-bold">Reference Number:</label>
				</div>
				<div className="w-1/8">
					<input
						type="text"
						id="RefNum"
						value={jobID}
						maxLength={5}
						minLength={5}
						pattern="[a-zA-Z0-9]+"
						required
						placeholder="Reference number"
						className="w-full p-2 ml-12 border border-gray-400"
					/>
				</div>
			</div>
		</>
	);
}

function PersonalDetail() {
	return (
		<div className="p-1.5">
			<h2 className="mb-8 text-3xl font-bold">Personal Detail</h2>
			<div className="flex flex-wrap mb-8">
				<div className="flex flex-wrap w-1/2">
					<div className="w-1/4">
						<label className="text-lg font-bold">First Name:</label>
					</div>
					<div className="w-3/4">
						<input
							type="text"
							id="FirstName"
							maxLength={20}
							pattern="^[a-zA-Z]+$"
							required
							placeholder="First Name"
							className="w-full p-2 border border-gray-400"
						/>
					</div>
				</div>

				<div className="flex flex-wrap w-1/2 pl-5">
					<div className="w-1/4">
						<label className="text-lg font-bold">Last Name:</label>
					</div>
					<div className="w-3/4">
						<input
							type="text"
							id="LastName"
							maxLength={20}
							pattern="^[a-zA-Z]+$"
							required
							placeholder="Last Name"
							className="w-full p-2 border border-gray-400"
						/>
					</div>
				</div>
			</div>

			<div className="flex flex-wrap mb-8">
				<div className="flex flex-wrap w-1/2">
					<div className="w-1/4">
						<label className="text-lg font-bold">Date of Birth:</label>
					</div>
					<input
						type="text"
						id="DOB"
						pattern="\d{1,2}\/\d{1,2}\/\d{4}"
						required
						placeholder="DD/MM/YYYY"
						className="w-3/4 p-2 border border-gray-400"
					/>
				</div>
				<div className="flex flex-wrap w-1/2 pl-5">
					<div className="w-1/4">
						<label className="text-lg font-bold">Gender:</label>
					</div>
					<div className="w-3/4">
						<input type="radio" name="gender" id="Male" required />
						<label className="ml-2 text-lg font-bold">Male</label>

						<input
							className="ml-8"
							type="radio"
							name="gender"
							id="Female"
							required
						/>
						<label className="ml-2 text-lg font-bold">Female</label>
					</div>
				</div>
			</div>

			<div className="flex flex-wrap mb-8">
				<div className="flex flex-wrap w-1/2">
					<div className="w-1/4">
						<label className="mb-2 text-lg font-bold">Street:</label>
					</div>
					<input
						type="text"
						id="Street"
						maxLength={40}
						required
						placeholder="Enter Street"
						className="w-3/4 p-2 border border-gray-400"
					/>
				</div>

				<div className="flex flex-wrap w-1/2 pl-5">
					<div className="w-1/4">
						<label className="mb-2 text-lg font-bold">Suburb:</label>
					</div>
					<input
						type="text"
						id="Suburb"
						maxLength={40}
						required
						placeholder="Enter Suburb"
						className="w-3/4 p-2 border border-gray-400"
					/>
				</div>
			</div>
			<div className="flex flex-wrap mb-8">
				<div className="flex flex-wrap w-1/2">
					<div className="w-1/4">
						<label className="mb-2 text-lg font-bold">State:</label>
					</div>
					<select
						name="state"
						id="State"
						required
						className="w-3/4 p-2 border border-gray-400"
					>
						<option value="">Please Select</option>
						<option id="VIC" value="VIC">
							VIC
						</option>
						<option id="NSW" value="NSW">
							NSW
						</option>
						<option id="QLD" value="QLD">
							QLD
						</option>
						<option id="NT" value="NT">
							NT
						</option>
						<option id="WA" value="WA">
							WA
						</option>
						<option id="SA" value="SA">
							SA
						</option>
						<option id="TAS" value="TAS">
							TAS
						</option>
						<option id="ACT" value="ACT">
							ACT
						</option>
					</select>
				</div>

				<div className="flex flex-wrap w-1/2 pl-5">
					<div className="w-1/4">
						<label className="mb-2 text-lg font-bold">Postcode:</label>
					</div>
					<input
						type="text"
						id="Postcode"
						maxLength={4}
						minLength={4}
						pattern="[0-9]{4}"
						required
						placeholder="Enter Postcode"
						className="w-3/4 p-2 border border-gray-400"
					/>
				</div>
			</div>
			<div className="flex flex-wrap mb-8">
				<div className="flex flex-wrap w-1/2">
					<div className="w-1/4">
						<label className="mb-2 text-lg font-bold">Phone:</label>
					</div>
					<input
						type="text"
						id="PhoneNum"
						maxLength={12}
						minLength={8}
						pattern="^[0-9]+"
						required
						placeholder="Enter Phone Number"
						className="w-3/4 p-2 border border-gray-400"
					/>
				</div>

				<div className="flex flex-wrap w-1/2 pl-5">
					<div className="w-1/4">
						<label className="mb-2 text-lg font-bold ">Email:</label>
					</div>
					<input
						type="text"
						id="Email"
						pattern="^.+@.+\..{2,3}$"
						required
						placeholder="Enter Email Address"
						className="w-3/4 p-2 border border-gray-400"
					/>
				</div>
			</div>
		</div>
	);
}
function EducationalBackground() {
	const [rows, setRows] = useState([{ id: 1 }]);
	const addRow = () => {
		const newRow = { id: rows.length + 1 };
		setRows([...rows, newRow]);
	};
	const deleteRow = () => {
		const updatedRows = [...rows];
		updatedRows.pop();
		setRows(updatedRows);
	};

	return (
		<>
			<div className="p-1.5 mb-8">
				<h2 className="mb-4 text-3xl font-bold">Educational Background</h2>
				<div className="border">
					<div className="px-6 py-3 border rounded-lg bg-gray-50">
						<div className="flex flex-wrap">
							<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
								Start from
							</label>
							<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
								Graduate At
							</label>
							<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
								Name of Educational Institution
							</label>
							<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
								Qualification
							</label>
						</div>
					</div>
					{rows.map((row) => (
						<div className="px-6 py-3 border" key={row.id}>
							<div className="flex flex-wrap my-2">
								<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`EdYearFrom${row.id}`}
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength={7}
										className="w-11/12 p-2 border border-gray-400"
									/>
								</label>
								<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`EdYearTo${row.id}`}
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength={7}
										className="w-11/12 p-2 border border-gray-400"
									/>
								</label>
								<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`SchoolName${row.id}`}
										maxLength={60}
										placeholder="Enter name of the education institution"
										className="w-11/12 p-2 mr-2 border border-gray-400"
									/>
								</label>
								<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`Quali${row.id}`}
										maxLength={60}
										placeholder="Enter Qualification"
										className="w-11/12 p-2 border border-gray-400"
									/>
								</label>
							</div>
						</div>
					))}
					{/* <textarea
						id="Misc1"
						maxLength="200"
						placeholder="Misc"
						className="w-11/12 p-2 my-4 ml-6 border border-gray-400 "
					></textarea> */}
				</div>
				<div className="px-6 py-3 border">
					<div className="flex">
						<button
							onClick={addRow}
							className="px-4 py-2 mr-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
						>
							Add Row
						</button>
						<button
							onClick={deleteRow}
							className="px-4 py-2 mr-2 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded hover:bg-red-100 focus:outline-none"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

function JobExperience() {
	const [rows, setRows] = useState([{ id: 1 }]);

	const addRow = () => {
		const newRow = { id: rows.length + 1 };
		setRows([...rows, newRow]);
	};
	const deleteRow = () => {
		const updatedRows = [...rows];
		updatedRows.pop();
		setRows(updatedRows);
	};
	return (
		<>
			<div className="p-1.5 mb-8">
				<h2 className="mb-4 text-3xl font-bold">Job Experience</h2>
				<div className="border">
					<div className="px-6 py-3 border rounded-lg bg-gray-50">
						<div className="flex flex-wrap">
							<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
								Employed from
							</label>
							<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
								Left at
							</label>
							<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
								Name of Organisation
							</label>
							<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
								Position
							</label>
						</div>
					</div>
					{rows.map((row) => (
						<div className="px-6 py-3 border" key={row.id}>
							<div className="flex flex-wrap my-2">
								<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`EmpYearFrom${row.id}`}
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength={7}
										className="w-11/12 p-2 border border-gray-400"
									/>
								</label>
								<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`EmpYearTo${row.id}`}
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength={7}
										className="w-11/12 p-2 border border-gray-400"
									/>
								</label>
								<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`OrgName${row.id}`}
										maxLength={60}
										placeholder="Enter name of the organisation"
										className="w-11/12 p-2 mr-2 border border-gray-400"
									/>
								</label>
								<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`Position${row.id}`}
										maxLength={60}
										placeholder="Enter position"
										className="w-11/12 p-2 border border-gray-400"
									/>
								</label>
							</div>
						</div>
					))}
				</div>
				<div className="px-6 py-3 border">
					<div className="flex">
						<button
							onClick={addRow}
							className="px-4 py-2 mr-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
						>
							Add Row
						</button>
						<button
							onClick={deleteRow}
							className="px-4 py-2 mr-2 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded hover:bg-red-100 focus:outline-none"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
function ProfRecognition() {
	const [rows, setRows] = useState([{ id: 1 }]);

	const addRow = () => {
		const newRow = { id: rows.length + 1 };
		setRows([...rows, newRow]);
	};

	const deleteRow = () => {
		const updatedRows = [...rows];
		updatedRows.pop();
		setRows(updatedRows);
	};

	return (
		<>
			<div className="p-1.5 mb-8">
				<h2 className="mb-4 text-3xl font-bold">Professional Recognition</h2>
				<div className="border">
					<div className="px-6 py-3 border rounded-lg bg-gray-50">
						<div className="flex flex-wrap">
							<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
								Start from
							</label>

							<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
								Name of Educational Institution
							</label>
							<label className="w-3/6 text-xs font-bold text-left text-gray-500 uppercase">
								Qualification
							</label>
						</div>
					</div>
					{rows.map((row) => (
						<div className="px-6 py-3 border" key={row.id}>
							<div className="flex flex-wrap my-2">
								<label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`EdYearFrom${row.id}`}
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength={7}
										className="w-11/12 p-2 border border-gray-400"
									/>
								</label>

								<label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`IssuerName${row.id}`}
										maxLength={60}
										placeholder="Enter name of issuer"
										className="w-11/12 p-2 mr-2 border border-gray-400"
									/>
								</label>
								<label className="w-3/6 text-xs font-bold text-left text-gray-500 uppercase">
									<input
										type="text"
										id={`RecognitionType${row.id}`}
										maxLength={60}
										placeholder="Enter types of recognition"
										className="w-11/12 p-2 border border-gray-400"
									/>
								</label>
							</div>
						</div>
					))}
				</div>
				<div className="px-6 py-3 border">
					<div className="flex">
						<button
							onClick={addRow}
							className="px-4 py-2 mr-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
						>
							Add Row
						</button>
						<button
							onClick={deleteRow}
							className="px-4 py-2 mr-2 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded hover:bg-red-100 focus:outline-none"
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
function TimeAvailability() {
	return (
		<>
			<div className="flex flex-col p-1.5 mb-8">
				<div className="mb-6">
					<label className="text-3xl font-bold ">Time Availability:</label>
				</div>
				<div className="flex flex-wrap">
					<div className="mr-8">
						<input className="w-5 h-5" type="checkbox" id="Mon" value="Mon" />
						<label className="ml-2 text-xl">Monday</label>
					</div>
					<div className="mr-8">
						<input className="w-5 h-5" type="checkbox" id="Tue" value="Tue" />
						<label className="ml-2 text-xl">Tuesday</label>
					</div>

					<div className="mr-8">
						<input className="w-5 h-5" type="checkbox" id="Wed" value="Wed" />
						<label className="ml-2 text-xl">Wednesday</label>
					</div>

					<div className="mr-8">
						<input className="w-5 h-5" type="checkbox" id="Thu" value="Thu" />
						<label className="ml-2 text-xl">Thursday</label>
					</div>

					<div className="">
						<input className="w-5 h-5" type="checkbox" id="Fri" value="Fri" />
						<label className="ml-2 text-xl">Friday</label>
					</div>
				</div>
			</div>
		</>
	);
}
function Password() {
	return (
		<>
			<div className="flex flex-wrap p-1.5 mb-8">
				<div className="mr-8">
					<label className="text-3xl font-bold ">Password:</label>
				</div>
				<div>
					<input
						className="p-2 border border-gray-400 "
						type="password"
						placeholder="Type new password"
					/>
				</div>
			</div>
		</>
	);
}
function Button() {
	return (
		<>
			<input
				type="submit"
				value="Submit"
				className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
			/>

			<input
				type="reset"
				value="Reset"
				className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
			/>
		</>
	);
}

export default ApplyJob;
