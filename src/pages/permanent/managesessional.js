import React from "react";
import { Link } from "react-router-dom";

export default function ManageApplication() {
	return (
		<div className="px-5 mt-5 ">
			<div className="flex flex-col">
				<div className="overflow-x-auto">
					{/* <div className="py-3 pl-2">
						<div className="relative max-w-xs">
							<label htmlFor="hs-table-search" className="sr-only">
								Search
							</label>
							<input
								type="text"
								name="hs-table-search"
								id="hs-table-search"
								className="block w-full p-3 pl-10 text-sm border-gray-200 rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
								placeholder="Search..."
							/>
							<div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
								<svg
									className="h-3.5 w-3.5 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									viewBox="0 0 16 16"
								>
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
							</div>
						</div>
					</div> */}

					<div className="p-1.5 w-full inline-block align-middle">
						<h2 className="mb-4 text-3xl font-bold">Sessional Staff List</h2>
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
											className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
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
							<Link to={"/viewsessional"}> Sessional Page </Link>
						</div>
						<br />
					</div>
				</div>
			</div>
		</div>
	);
}
