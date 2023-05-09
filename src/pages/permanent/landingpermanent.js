import React from "react";
import { Link } from "react-router-dom";

function LandingPermanent() {
	return (
		<div className="">
			{/* landing permanent */}
			{/* todolist: refer to the landingpublic design  */}
			{/* make link to manageapplication, managepublish, managesessional */}
			{/* <Jumbotron /> */}
			{/* <Content /> */}
			<Card />
		</div>
	);
}

function Jumbotron() {
	return (
		<div
			className="h-screen bg-center bg-cover"
			style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pic1.jpg)` }}
		>
			<div className="flex flex-col items-center justify-center h-full">
				<h1 className="p-3 mb-4 text-4xl font-bold text-black bg-gray-100 rounded-full">
					Welcome to CorpU University
				</h1>
				<p className="p-3 mb-8 text-lg text-black bg-gray-100 rounded-full">
					Learn and grow with us
				</p>
				<button className="px-6 py-2 text-black bg-white rounded-full shadow-lg">
					Apply Now
				</button>
			</div>
		</div>
	);
}

function Content() {
	return (
		<>
			{/* make content with title and paragraph, with 90% width, with shadow */}
			<div className="flex flex-col items-center justify-center p-10 m-8 bg-gray-100 shadow-lg">
				<h1 className="mb-4 text-4xl font-bold">Hello John,</h1>
				<p className="mb-8 text-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
					voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor
					sit amet consectetur adipisicing elit. Quisquam, voluptatum.
				</p>
			</div>
		</>
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

function ContactUs() {
	return (
		<>
			{/* About us, has 2 columns. left column has address, right column has phone and email */}
			<div className="flex flex-col items-center justify-center p-10 m-8 bg-gray-100 shadow-lg">
				<h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
				<div className="flex flex-row items-center justify-center">
					<div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
						<h1 className="mb-4 text-2xl font-bold">Address</h1>
						<p className="mb-8 text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</p>
					</div>
					<div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
						<h1 className="mb-4 text-2xl font-bold">Phone</h1>
						<p className="mb-8 text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</p>
						<h1 className="mb-4 text-2xl font-bold">Email</h1>
						<p className="mb-8 text-lg">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
							voluptatum.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default LandingPermanent;
