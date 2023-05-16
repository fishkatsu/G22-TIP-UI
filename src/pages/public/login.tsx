import React from "react";
import { Link } from "react-router-dom";

function Login() {
	return (
		<>
			<LoginForm />
		</>
	);
}

function LoginForm() {
	return (
		<div className="flex mt-8 mb-8">
			<div className="flex flex-wrap justify-center w-1/3 m-auto text-white bg-gray-100 rounded-lg shadow-lg bg-gradient-to-br">
				<form className="w-10/12 m-5">
					<h1 className="w-full my-6 text-4xl font-bold tracking-widest text-center text-black">
						CorpU.
					</h1>
					<div className="w-full my-6">
						<input
							className="w-full p-2 border border-gray-300 rounded-md"
							type="email"
							placeholder="Email"
						/>
					</div>
					<div className="w-full my-6">
						<input
							className="w-full p-2 border border-gray-300 rounded-md"
							type="password"
							placeholder="Password"
						/>
					</div>

					<Link to="/landingpermanent">
						<div className="w-full my-6">
							<button
								className="w-full p-2 text-white bg-gray-500 rounded-md bg-gradient-to-br"
								type="submit"
							>
								Login
							</button>
						</div>
					</Link>
					<Link to="/register">
						<p className="w-full my-6 text-xs font-bold tracking-widest text-center text-gray-500 underline">
							Don't have an account? Register here.
						</p>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default Login;
