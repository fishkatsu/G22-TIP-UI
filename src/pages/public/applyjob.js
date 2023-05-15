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
		setJobID(storedJobID);
	}, []);
	return (
		<>
			<div className="flex flex-wrap w-full mb-4 p-1.5">
				<div className="w-1/4">
					<label className="text-lg font-bold">Reference Number:</label>
				</div>
				<div className="w-3/4">
					<input
						type="text"
						id="RefNum"
						value={jobID}
						maxlength="5"
						minlength="5"
						pattern="[a-zA-Z0-9]+"
						required="required"
						placeholder="Reference number"
						className="w-full p-2 mb-4 border border-gray-400"
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
							maxlength="20"
							pattern="^[a-zA-Z]+$"
							required="required"
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
							maxlength="20"
							pattern="^[a-zA-Z]+$"
							required="required"
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
						required="required"
						placeholder="DD/MM/YYYY"
						className="w-3/4 p-2 border border-gray-400"
					/>
				</div>
				<div className="flex flex-wrap w-1/2 pl-5">
					<div className="w-1/4">
						<label className="text-lg font-bold">Gender:</label>
					</div>
					<div className="w-3/4">
						<input
							className=""
							type="Radio"
							Name="gender"
							id="Male"
							required="required"
						/>
						<label className="ml-2 text-lg font-bold">Male</label>

						<input
							className="ml-8"
							type="Radio"
							Name="gender"
							id="Female"
							required="required"
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
						maxlength="40"
						required="required"
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
						maxlength="40"
						required="required"
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
						required="required"
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
						maxlength="4"
						minlength="4"
						pattern="[0-9]{4}"
						required="required"
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
						maxlength="12"
						minlength="8"
						pattern="^[0-9]+"
						required="required"
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
						required="required"
						placeholder="Enter Email Address"
						className="w-3/4 p-2 border border-gray-400"
					/>
				</div>
			</div>
		</div>
	);
}
function EducationalBackground() {
	return (
		<>
			<div className="p-1.5 w-full inline-block align-middle">
				<h2 className="mb-4 text-3xl font-bold">Educational Background</h2>
				<div className="overflow-hidden border rounded-lg">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th
									scope="col"
									className="w-1/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Start from
								</th>
								<th
									scope="col"
									className="w-1/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Graduate at
								</th>
								<th
									scope="col"
									className="w-2/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Name of Educational Institution
								</th>
								<th
									scope="col"
									className="w-2/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Qualification
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearFrom1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearTo1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="SchoolName1"
										maxlength="60"
										placeholder="Enter name of the education institution"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="Quali1"
										maxlength="60"
										placeholder="Enter qualificaton"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
							</tr>

							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearFrom2"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearTo2"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="SchoolName2"
										maxlength="60"
										placeholder="Enter name of the education institution"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="Quali2"
										maxlength="60"
										placeholder="Enter qualificaton"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
							</tr>

							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearFrom2"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearTo2"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="SchoolName2"
										maxlength="60"
										placeholder="Enter name of the education institution"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="Quali2"
										maxlength="60"
										placeholder="Enter qualificaton"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
							</tr>
						</tbody>
						{/* create pagination if time permits*/}
					</table>
				</div>

				<br />
			</div>
		</>
	);
}
function JobExperience() {
	return (
		<>
			<div className="p-1.5 w-full inline-block align-middle">
				<h2 className="mb-4 text-3xl font-bold">Job Experience</h2>
				<div className="overflow-hidden border rounded-lg">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th
									scope="col"
									className="w-1/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Employed from
								</th>
								<th
									scope="col"
									className="w-1/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Left at
								</th>
								<th
									scope="col"
									className="w-2/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Name of Organisation
								</th>
								<th
									scope="col"
									className="w-2/6 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Position
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearFrom1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearTo1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="SchoolName1"
										maxlength="60"
										placeholder="Enter name of the organisation"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="Quali1"
										maxlength="60"
										placeholder="Enter position"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
							</tr>
							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearFrom1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearTo1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="SchoolName1"
										maxlength="60"
										placeholder="Enter name of the organisation"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="Quali1"
										maxlength="60"
										placeholder="Enter position"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
							</tr>
							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearFrom1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="EdYearTo1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxLength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="SchoolName1"
										maxlength="60"
										placeholder="Enter name of the organisation"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="Quali1"
										maxlength="60"
										placeholder="Enter position"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
							</tr>
						</tbody>
						{/* create pagination if time permits*/}
					</table>
				</div>

				<br />
			</div>
		</>
	);
}
function ProfRecognition() {
	return (
		<>
			<div className="p-1.5 w-full inline-block align-middle">
				<h2 className="mb-4 text-3xl font-bold">Professional Recognition</h2>
				<div className="overflow-hidden border rounded-lg">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th
									scope="col"
									className="w-1/3 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Date of Obtained
								</th>
								<th
									scope="col"
									className="w-1/3 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Name of Issuer
								</th>
								<th
									scope="col"
									className="w-1/3 px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Types of Recognition
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="PRyear1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxlength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="PRissuer1"
										maxlength="60"
										placeholder="Enter Name of Issuer"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="PRtypes1"
										maxlength="60"
										placeholder="Enter Types of Recognition"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
							</tr>

							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="PRyear1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxlength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="PRissuer1"
										maxlength="60"
										placeholder="Enter Name of Issuer"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="PRtypes1"
										maxlength="60"
										placeholder="Enter Types of Recognition"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
							</tr>
							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="PRyear1"
										pattern="\d{1,2}\/\d{4}"
										placeholder="MM/YYYY"
										maxlength="7"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="PRissuer1"
										maxlength="60"
										placeholder="Enter Name of Issuer"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									<input
										type="text"
										id="PRtypes1"
										maxlength="60"
										placeholder="Enter Types of Recognition"
										className="w-full p-2 mb-4 border border-gray-400"
									/>
								</td>
							</tr>
						</tbody>
						{/* create pagination if time permits*/}
					</table>
				</div>

				<br />
			</div>
		</>
	);
}
function TimeAvailability() {
	return (
		<>
			<div className="flex flex-col p-1.5 mb-8">
				<div className="mb-3">
					<label className="text-3xl font-bold ">Time Availability:</label>
				</div>
				<div className="flex flex-wrap">
					<div className="w-1/5">
						<input className="" type="checkbox" id="Mon" value="Mon" />
						<label className="ml-5 text-lg">Monday</label>
					</div>
					<div className="w-1/5">
						<input className="" type="checkbox" id="Tue" value="Tue" />
						<label className="ml-5 text-lg">Tuesday</label>
					</div>

					<div className="w-1/5">
						<input className="" type="checkbox" id="Wed" value="Wed" />
						<label className="ml-5 text-lg">Wednesday</label>
					</div>

					<div className="w-1/5">
						<input className="" type="checkbox" id="Thu" value="Thu" />
						<label className="ml-5 text-lg">Thursday</label>
					</div>

					<div className="w-1/5">
						<input className="" type="checkbox" id="Fri" value="Fri" />
						<label className="ml-5 text-lg">Friday</label>
					</div>
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
