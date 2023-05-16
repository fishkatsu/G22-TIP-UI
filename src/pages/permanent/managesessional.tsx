import React from "react";
import { Link } from "react-router-dom";

export default function ManageApplication() {
	return (
		<div className="flex flex-col p-10 m-8 shadow-lg">
			<h1 className="mb-10 text-4xl font-bold">Manage Sessional</h1>
			<div className="flex flex-col">
				<Table />
			</div>
			<Link to={"/viewsessional"}> Sessional Page test button</Link>
		</div>
	);
}

function Table() {
	return (
		<div className="overflow-x-auto">
			<div className="p-1.5 w-full inline-block align-middle">
				<div className="overflow-hidden border rounded-lg">
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
									Name
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Email
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Field 1
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Field 2
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									View
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									1
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									<Link
										to={"/viewsessional"}
										className="hover:underline hover:font-bold"
									>
										Jone Doe
									</Link>
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									jonne62@gmail.com
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to={"/viewsessional"}>
										<button className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white">
											View
										</button>
									</Link>
								</td>
							</tr>

							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									2
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									<Link
										to={"/viewsessional"}
										className="hover:underline hover:font-bold"
									>
										Jone Doe
									</Link>
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									jonne62@gmail.com
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to={"/viewsessional"}>
										<button className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white">
											View
										</button>
									</Link>
								</td>
							</tr>

							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									3
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Jane Doe
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									jonne62@gmail.com
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to={"/viewsessional"}>
										<button className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white">
											View
										</button>
									</Link>
								</td>
							</tr>

							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									4
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Jane Doe
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									jonne62@gmail.com
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to={"/viewsessional"}>
										<button className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white">
											View
										</button>
									</Link>
								</td>
							</tr>

							<tr>
								<td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
									5
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Jane Doe
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									jonne62@gmail.com
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to={"/viewsessional"}>
										<button className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white">
											View
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
		</div>
	);
}
