import React from "react";
import { Link } from "react-router-dom";

// https://larainfo.com/blogs/react-tailwind-css-table-example

function ManageApplication() {
	return (
		<>
			<div className="flex flex-col p-10 m-8 shadow-lg">
				<h1 className="mb-10 text-4xl font-bold">Manage Applicant</h1>
				<div className="flex flex-col">
					<TableC />
					<Link to={"/viewsessional"}> Sessional Page test button</Link>
				</div>
			</div>
		</>
	);
}

function TableC() {
	return (
		<div className="overflow-x-auto">
			<div className="p-1.5 w-full inline-block align-middle">
				<div className="overflow-auto border rounded-lg">
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
									Field 3
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Field 4
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Edit
								</th>
								<th
									scope="col"
									className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
								>
									Delete
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
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-green-500 rounded shadow-lg text-m hover:bg-green-700">
											Accept
										</button>
									</Link>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-red-500 rounded shadow-lg text-m hover:bg-red-700">
											Decline
										</button>
									</Link>
								</td>
							</tr>

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
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-green-500 rounded shadow-lg text-m hover:bg-green-700">
											Accept
										</button>
									</Link>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-red-500 rounded shadow-lg text-m hover:bg-red-700">
											Decline
										</button>
									</Link>
								</td>
							</tr>

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
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-green-500 rounded shadow-lg text-m hover:bg-green-700">
											Accept
										</button>
									</Link>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-red-500 rounded shadow-lg text-m hover:bg-red-700">
											Decline
										</button>
									</Link>
								</td>
							</tr>
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
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-green-500 rounded shadow-lg text-m hover:bg-green-700">
											Accept
										</button>
									</Link>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-red-500 rounded shadow-lg text-m hover:bg-red-700">
											Decline
										</button>
									</Link>
								</td>
							</tr>
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
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-green-500 rounded shadow-lg text-m hover:bg-green-700">
											Accept
										</button>
									</Link>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-red-500 rounded shadow-lg text-m hover:bg-red-700">
											Decline
										</button>
									</Link>
								</td>
							</tr>
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
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
									Lorem Ipsum
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-green-500 rounded shadow-lg text-m hover:bg-green-700">
											Accept
										</button>
									</Link>
								</td>
								<td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
									<Link to="/">
										<button className="w-full p-1 text-white bg-red-500 rounded shadow-lg text-m hover:bg-red-700">
											Decline
										</button>
									</Link>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<br />
			</div>
		</div>
	);
}
export default ManageApplication;
// {
// 	/* <th scope="col" className="py-3 pl-4">
// 											<div className="flex items-center h-5">
// 												<input
// 													id="checkbox-all"
// 													type="checkbox"
// 													className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
// 												/>
// 												<label htmlFor="checkbox" className="sr-only">
// 													Checkbox
// 												</label>
// 											</div>
// 										</th>
// 	<td className="py-3 pl-4">
// 	<div className="flex items-center h-5">
// 		<input
// 			type="checkbox"
// 			className="text-blue-600 border-gray-200 rounded focus:ring-blue-500"
// 		/>
// 		<label htmlFor="checkbox" className="sr-only">
// 			Checkbox
// 		</label>
// 	</div>
// </td>; */
// }
