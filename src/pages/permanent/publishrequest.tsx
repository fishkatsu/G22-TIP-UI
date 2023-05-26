import React from "react";
import { Link } from "react-router-dom";

function PublishRequest() {
	return (
		<>
			<div className="flex flex-col p-10 m-8 shadow-lg">
				<h1 className="mb-10 text-4xl font-bold">Publish request</h1>
				<div className="flex flex-col">
					<div className="flex flex-wrap mb-4">
						<div className="flex flex-wrap w-1/2">
							<div className="w-1/4">
								<label className="text-lg font-bold">Course ID:</label>
							</div>
							<div className="w-3/4">
								<input
									type="text"
									placeholder="Enter course ID"
									className="w-full p-2 mb-4 border border-gray-400"
								/>
							</div>
						</div>

						<div className="flex flex-wrap w-1/2 pl-5">
							<div className="w-1/4 text-center">
								<label className="text-lg font-bold">Course Name:</label>
							</div>
							<div className="w-3/4">
								<input
									type="text"
									placeholder="Enter course name"
									className="w-full p-2 mb-4 border border-gray-400 "
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap mb-3">
						<div className="flex flex-wrap w-1/3">
							<div className="w-1/4">
								<label className="text-lg font-bold">Detail 1:</label>
							</div>
							<div className="w-3/4">
								<input
									type="text"
									placeholder="Detail 1"
									className="w-full p-2 mb-4 border border-gray-400"
								/>
							</div>
						</div>

						<div className="flex flex-wrap w-1/3 pl-5">
							<div className="w-1/4 text-center">
								<label className="text-lg font-bold">Detail 2:</label>
							</div>
							<div className="w-3/4">
								<input
									type="text"
									placeholder="Detail 2"
									className="w-full p-2 mb-4 border border-gray-400"
								/>
							</div>
						</div>

						<div className="flex flex-wrap w-1/3 pl-5">
							<div className="w-1/4 text-center">
								<label className="text-lg font-bold">Detail 3:</label>
							</div>
							<div className="w-3/4">
								<input
									type="text"
									placeholder="Detail 3"
									className="w-full p-2 mb-4 border border-gray-400"
								/>
							</div>
						</div>
					</div>

					<label className="mb-2 text-lg font-bold">Notes 1:</label>
					<textarea
						placeholder="Enter notes 1"
						className="p-2 mb-4 border border-gray-400"
					/>

					<label className="mb-2 text-lg font-bold">Notes 2:</label>
					<textarea
						placeholder="Enter notes 2"
						className="p-2 mb-4 border border-gray-400"
					/>

					<label className="mb-2 text-lg font-bold">Notes 3:</label>
					<textarea
						placeholder="Enter notes 3"
						className="p-2 mb-4 border border-gray-400"
					/>
				</div>
				<Link to={"/"}>
					<button className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white">
						Submit
					</button>
				</Link>
			</div>
		</>
	);
}

export default PublishRequest;
