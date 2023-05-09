import React from "react";

const Timetable = () => {
	return (
		<>
			{/* timetable */}
			<div>
				<h1 className="text-xl font-bold">Timetable</h1>
				<div>
					<h2>Your schedule for this month</h2>
					<div className="flex flex-col">{/* display each row */}</div>
				</div>
			</div>
		</>
	);
};

export default Timetable;
