import React from "react";
import { Link } from "react-router-dom";

function LandingPermanent() {
	return (
		<div className="">
			<Card />
		</div>
	);
}

function Card() {
	return (
		<>
			{/* make 3 cards, with title "Lorem Ipsum" on top of the cards */}
			<div className="flex flex-col items-center justify-center p-10 m-8 bg-gray-100 shadow-lg">
				<h1 className="mb-4 text-4xl font-bold">Welcome John</h1>
				<div className="flex flex-row items-center justify-center">
					<Link to={"/manageapplication"} className="">
						<div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
							<h1 className="mb-4 text-2xl font-bold uppercase">Application</h1>
							<p className="mb-8 text-lg">
								Check data of application from sessional staff.
							</p>
						</div>
					</Link>
					<Link to={"/managesessional"} className="">
						<div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
							<h1 className="mb-4 text-2xl font-bold uppercase">
								Sessional Staff
							</h1>
							<p className="mb-8 text-lg">Check data of sessional staff.</p>
						</div>
					</Link>
					<Link to={"/publishrequest"} className="">
						<div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
							<h1 className="mb-4 text-2xl font-bold uppercase">
								Publish Request
							</h1>
							<p className="mb-8 text-lg">
								Publish job request so that sessional staff can apply for the
								job.
							</p>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
}

export default LandingPermanent;
