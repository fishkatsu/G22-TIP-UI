import React from "react";


function ApplyJob() {
	return (
		<>	
		<form action="">
			<div className="flex flex-col p-10 m-8 shadow-lg">
				<h1 className="mb-10 text-4xl font-bold">Application Form</h1>
				<div className="flex flex-col">
					<div className="flex flex-wrap mb-4">
						<div className="flex flex-wrap w-1/2">
							<div className="w-1/4">
								<label className="text-lg font-bold">Reference Number:</label>
							</div>
							<div className="w-1/4">
								<input
									type="text" id="RefNum" maxlength="5" minlength="5" pattern="[a-zA-Z0-9]+" required="required" placeholder="Reference number" className="w-full p-2 mb-4 border border-gray-400"
								/>
							</div>
						</div>
					</div>

					<h2 className="mb-4 text-3xl font-bold">Personal Detail</h2>
					<div className="flex flex-wrap mb-3">
						<div className="flex flex-wrap w-1/3">
							<div className="w-1/4">
								<label className="text-lg font-bold">First Name:</label>
							</div>
							<div className="w-3/4">
								<input
									type="text" id="FirstName" maxlength="20" pattern="^[a-zA-Z]+$" required="required" placeholder="Fist Name" className="w-full p-2 mb-4 border border-gray-400"
								/>
							</div>
						</div>

						<div className="flex flex-wrap w-1/3 pl-5">
							<div className="w-1/4 text-center">
								<label className="text-lg font-bold">Last Name:</label>
							</div>
							<div className="w-3/4">
								<input
									type="text" id="LastName" maxlength="20" pattern="^[a-zA-Z]+$" required="required" placeholder="Last Name" className="w-full p-2 mb-4 border border-gray-400"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap mb-3">
						<div className="flex flex-wrap w-1/3">
							<div className="w-1/4">
								<label className="text-lg font-bold">Gender:</label>
							</div>
									<input className="ml-8" type="Radio" Name="gender" id="Male" required="required" />
									<label className="text-lg font-bold">Male</label>
									
									<input className="ml-8" type="Radio" Name="gender" id="Female" required="required" />
									<label className="text-lg font-bold">Female</label>
						</div>
						
					
					

						<div className="flex flex-wrap w-1/3">
								<div className="w-1/4">
										<label className="text-lg font-bold">Date of Birth:</label>
									</div>
										<input type="text" id="DOB" pattern="\d{1,2}\/\d{1,2}\/\d{4}" required="required" placeholder="DD/MM/YYYY"className="p-2 mb-4 border border-gray-400"
					/>
						</div>

					</div>

					<div className="flex flex-wrap mb-3">
						<div className="flex flex-wrap w-1/3">
							<div className="w-1/4">
								<label className="mb-2 text-lg font-bold">Street:</label>
							</div>
									<input type="text" id="Street" maxlength="40" required="required" placeholder="Enter Street" className="p-2 mb-4 border border-gray-400"
					/>		
							
						</div>
					

					
						<div className="flex flex-wrap w-1/3">
							<div className="w-1/4">
								<label className="mb-2 text-lg font-bold">Suburb:</label>
							</div>
									<input type="text" id="Suburb" maxlength="40" required="required" placeholder="Enter Suburb" className="p-2 mb-4 border border-gray-400"
						/>
						</div>


						<div className="flex flex-wrap w-1/3">
							<div className="w-1/4">
								<label className="mb-2 text-lg font-bold">State:</label>
							</div>
									<select name="state" id="State" required="required">
									<option value="">Please Select</option>
									<option id="VIC" value="VIC">VIC</option>
									<option id="NSW" value="NSW">NSW</option>
									<option id="QLD" value="QLD">QLD</option> 
									<option id="NT" value="NT">NT</option>
									<option id="WA" value="WA">WA</option>
									<option id="SA" value="SA">SA</option>
									<option id="TAS" value="TAS">TAS</option>
									<option id="ACT" value="ACT">ACT</option>
								</select>
						</div>

						<div className="flex flex-wrap w-1/3">
							<div className="w-1/4">
								<label className="mb-2 text-lg font-bold">Postcode:</label>
							</div>
									<input type="text" id="Postcode" maxlength="4" minlength="4" pattern="[0-9]{4}" required="required" placeholder="Enter Postcode" className="p-2 mb-4 border border-gray-400"
						/>
						</div>
					</div>
				
					<div className="flex flex-wrap mb-3">
						<div className="flex flex-wrap w-1/3">
							<div className="w-1/4">
								<label className="mb-2 text-lg font-bold">Phone:</label>
							</div>
								<input type="text" id="PhoneNum" maxlength="12" minlength="8" pattern="^[0-9]+" required="required" placeholder="Enter Phone Number" className="p-2 mb-4 border border-gray-400"
								/>
						</div>

						<div className="flex flex-wrap w-1/3">
							<div className="w-1/4">
								<label className="mb-2 text-lg font-bold">Email:</label>
							</div>
								<input type="text" id="Email" pattern="^.+@.+\..{2,3}$" required="required" placeholder="Enter Email Address" className="p-2 mb-4 border border-gray-400"
								/>
						</div>
					</div>
					
					<div className="p-1.5 w-full inline-block align-middle">
						<h2 className="mb-4 text-3xl font-bold">Educational Background</h2>
						<div className="overflow-hidden border rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Start from
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Graducate at 
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Name of Educational Institution
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Qualification
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									<tr>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="EdYearFrom1" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="EdYearTo1" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="SchoolName1" maxlength="60" placeholder="Enter name of the education institution" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="Quali1" maxlength="60" placeholder="Enter qualificaton" className="p-2 mb-4 border border-gray-400" />
										</td>
									</tr>

									<tr>
									<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text"  id="EdYearFrom2" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text"  id="EdYearTo2" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="SchoolName2" maxlength="60" placeholder="Enter name of the education institution" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="Quali2" maxlength="60" placeholder="Enter qualificaton" className="p-2 mb-4 border border-gray-400" />
										</td>
									</tr>

									<tr>
									<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="EdYearFrom3" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="EdYearTo3" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="SchoolName3" maxlength="60" placeholder="Enter name of the education institution" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="Quali3" maxlength="60" placeholder="Enter qualificaton" className="p-2 mb-4 border border-gray-400" />
										</td>
									</tr>
								</tbody>
								{/* create pagination if time permits*/}
							</table>
						</div>
						
						<br />
					</div>

					<div className="p-1.5 w-full inline-block align-middle">
						<h2 className="mb-4 text-3xl font-bold">Job Experience</h2>
						<div className="overflow-hidden border rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Employed from
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Left at 
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Name of Organisation
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Position
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									<tr>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="JobFrom1" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="JobTo1" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="CompanyName1" maxlength="60" placeholder="Enter name of Orgaisation" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="Position1" maxlength="60" placeholder="Enter Position" className="p-2 mb-4 border border-gray-400" />
										</td>
									</tr>

									<tr>
									<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="JobFrom2" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="JobTo2" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="CompanyName2" maxlength="60" placeholder="Enter Name of Organisation" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="Position2" maxlength="60" placeholder="Enter Position" className="p-2 mb-4 border border-gray-400" />
										</td>
									</tr>

									<tr>
									<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="JobFrom3" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="JobTo3" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxLength="7" className="w-1/3 p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="CompanyName3" maxlength="60" placeholder="Enter Name of Organisation" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="Position3" maxlength="60" placeholder="Enter Position" className="p-2 mb-4 border border-gray-400" />
										</td>
									</tr>
								</tbody>
								{/* create pagination if time permits*/}
							</table>
						</div>
						
						<br />
					</div>

					<div className="p-1.5 w-full inline-block align-middle">
						<h2 className="mb-4 text-3xl font-bold">Professional Recognition</h2>
						<div className="overflow-hidden border rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Date of Obtained
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Name of Issuer
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
										>
											Types of Recognition
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200">
									<tr>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="PRyear1" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxlength="7" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="PRissuer1" maxlength="60" placeholder="Enter Name of Issuer" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="PRtypes1" maxlength="60" placeholder="Enter Types of Recognition" className="p-2 mb-4 border border-gray-400" />
										</td>
										
									</tr>

									<tr>
									<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="PRyear2" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxlength="7" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="PRissuer2" maxlength="60" placeholder="Enter Name of Issuer" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="PRtypes2" maxlength="60" placeholder="Enter Types of Recognition" className="p-2 mb-4 border border-gray-400" />
										</td>
								
									</tr>

									<tr>
									<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="PRyear3" pattern="\d{1,2}\/\d{4}" placeholder="MM/YYYY" maxlength="7" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="PRissuer3" maxlength="60" placeholder="Enter Name of Issuer" className="p-2 mb-4 border border-gray-400" />
										</td>
										<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
											<input type="text" id="PRtypes3" maxlength="60" placeholder="Enter Types of Recognition" className="p-2 mb-4 border border-gray-400" />
										</td>
									</tr>
								</tbody>
								{/* create pagination if time permits*/}
							</table>
						</div>
						
						<br />
					</div>

					<div className="flex flex-wrap mb-4">
						<div className="flex flex-wrap w-100%">
							<div className="w-1/4">
								<label className="mb-2 text-lg font-bold">Time Availability:</label>
							</div>
								<div className="w-full">
									<input className="ml-8" type="checkbox" id="Mon" value="Mon"/>
									<label className="text-lg font-bold">Monday</label>
									
									<input className="ml-8" type="checkbox" id="Tue" value="Tue"/>
									<label className="text-lg font-bold">Tuesday</label>
									
									<input className="ml-8" type="checkbox" id="Wed" value="Wed" />
									<label className="text-lg font-bold">Wednesday</label>

									<input className="ml-8" type="checkbox" id="Thu" value="Thu" />
									<label className="text-lg font-bold">Thursday</label>

									<input className="ml-8" type="checkbox" id="Fri" value="Fri" />
									<label className="text-lg font-bold">Friday</label>
								</div>
						</div>
					</div>

				
				</div>
				
				
				<input type="submit" value="Submit" className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
					/>
						 
				
				<input type="reset" value=	"Reset" className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
					 />
						
			

			</div>
		</form>
				
		
		</>
	);
}

export default ApplyJob; 
