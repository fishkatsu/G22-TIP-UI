import React from "react";
import { Link } from "react-router-dom";

function Timetable() {
	return (
		<>
			<div className="flex flex-col p-10 m-8 shadow-lg">
				<h1 className="mb-8 text-4xl font-bold">Timetable</h1>
				<div className="flex flex-col">
					<ThisWeek />
					<UpcomingWeek />
				</div>
			</div>
		</>
	);
}
function ThisWeek() {
	return (
		<div>
			<p className="mb-4 text-2xl font-bold">Next 7 days</p>
			<div className="mb-10 overflow-hidden border rounded-lg">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								No.
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								Date
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								Class Name
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								Time
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								Class
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								1
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Monday, 15 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								13.00 - 15.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								EN403
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								2
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Monday, 15 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								EN403
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								3
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Tuesday, 16 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								BA404
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								4
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Wednesday, 17 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								BA405
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								5
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Thursday, 18 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								BA404
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								6
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Friday, 19 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								BA405
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								7
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Saturday, 20 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								EN403
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}

function UpcomingWeek() {
	return (
		<div>
			<p className="mb-4 text-2xl font-bold">Upcoming</p>
			<div className="overflow-hidden border rounded-lg">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								No.
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								Date
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								Class Name
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								Time
							</th>
							<th
								scope="col"
								className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
							>
								Class
							</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								1
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Monday, 15 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								EN403
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								2
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Tuesday, 16 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								BA404
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								3
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Wednesday, 17 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								BA405
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								4
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Thursday, 18 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								BA404
							</td>
						</tr>
						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								5
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Friday, 19 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								BA405
							</td>
						</tr>

						<tr>
							<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
								6
							</td>

							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Saturday, 20 May 2023
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								Technology Inquiry Project
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								15.00 - 17.00
							</td>
							<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
								EN403
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<br />
		</div>
	);
}

export default Timetable;
