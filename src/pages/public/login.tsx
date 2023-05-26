import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarPublic from "../../components/navbarpublic";

function Login() {
    return (
        <>
            <NavbarPublic />
            <LoginForm />
            <div></div>
        </>
    );
}

function LoginForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Make API call to PHP script
        fetch(
            `http://localhost:8888/login.php?email=${email}&password=${password}`
        )
            .then((response) => response.json())
            .then((data) => {
                const response = data.response;
                const userId = data.userId; // Retrieve the userId from the response

                if (response === "permanent") {
                    localStorage.setItem("userId", userId); // Store the userId in session storage
                    navigate("/landingpermanent");
                } else if (response === "sessional") {
                    localStorage.setItem("userId", userId); // Store the userId in session storage
                    navigate("/landingsessional");
                } else {
                    alert("You are not registered");
                }
            })
            .catch((error) => {
                console.error("", error);
                // Handle error case
                alert("An error occurred. Please try again later.");
            });
    };

    return (
        <div className="flex mt-8 mb-8">
            <div className="flex flex-wrap justify-center w-1/3 m-auto text-black bg-gray-100 rounded-lg shadow-lg bg-gradient-to-br">
                <form className="w-10/12 m-5" onSubmit={handleSubmit}>
                    <h1 className="w-full my-6 text-4xl font-bold tracking-widest text-center text-black">
                        CorpU.
                    </h1>
                    <div className="w-full my-6">
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="w-full my-6">
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="w-full p-2 text-white bg-gray-500 rounded-md bg-gradient-to-br"
                        type="submit"
                    >
                        Login
                    </button>

                    {/* <Link to="/register">
                        <p className="w-full my-6 text-xs font-bold tracking-widest text-center text-gray-500 underline">
                            Don't have an account? Register here.
                        </p>
                    </Link> */}
                    <Link to={"/landingpermanent"}>permanent</Link>
                    <Link to={"/landingsessional"}>
                        <p>sessional</p>
                    </Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
