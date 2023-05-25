import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavbarPublic from "../../components/navbarpublic";
import axios from "axios";

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
    // interface UserInfo {
    //     status: boolean;
    //     passwordStatu: boolean;
    //     userLoginInfo: {
    //         id: number;
    //         serial: string;
    //         email: string;
    //         firstName: string;
    //         lastName: string;
    //         userRole: string;
    //     }
    //     }
    // }
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [userInfo, setUserInfo] = useState<{
    //         status: boolean;
    //         passwordStatu: boolean;
    //         userLoginInfo: {
    //         id: number;
    //         serial: string;
    //         email: string;
    //         firstName: string;
    //         lastName: string;
    //         userRole: string;
    //     }}
    //     >();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`http://localhost:8080/user/login`, {
                email: email,
                password: password
            });
            console.log("response", response.data);
            // setUserInfo(response.data)
            const userInfo = response.data;
            if (response.data.status === true ) {
                // alert("Successful Login");
                console.log("userInfo",userInfo);
                localStorage.setItem("userId", userInfo?.userLoginInfo.id+""); // Store the userId in session storage
                localStorage.setItem("username", userInfo?.userLoginInfo.firstName+" "+userInfo?.userLoginInfo.lastName); // Store the userId in session storage
            
                if (userInfo?.userLoginInfo.userRole === 'permanent') {

                // if (userInfo?.userLoginInfo.userRole === 'permanent') {
                    // localStorage.setItem("userId", userInfo?.userLoginInfo.id+""); // Store the userId in session storage
                    // localStorage.setItem("username", userInfo?.userLoginInfo.firstName+" "+userInfo?.userLoginInfo.lastName); // Store the userId in session storage
                    navigate("/landingpermanent");
                    console.log("userInfo",userInfo?.userLoginInfo);
                    console.log("res.data.status.userLoginInfo.userRole",response.data.status.userLoginInfo.userRole);
                } else {
                    if (userInfo?.userLoginInfo.userRole === "sessional") {
                        // localStorage.setItem("userId", userInfo?.userLoginInfo.id+""); // Store the userId in session storage
                        // localStorage.setItem("username", userInfo?.userLoginInfo.firstName+""); // Store the userId in session storage
                        navigate("/landingsessional");
                        console.log("userInfo",userInfo?.userLoginInfo);
                }}
                } else if (response.data.passwordStatus === false) {
                alert("Unsuccessful login incorrect password, please try again");
                // navigate("/");
                }
        } catch {
            console.error("error",e);
            // alert("Unsuccessful login, please try again");
        } finally{
            setLoading(false);
        }
        // Make API call to PHP script
        // fetch(
        //     `http://localhost:3006/login.php?email=${email}&password=${password}`
        // )
        //     .then((response) => response.json())
        //     .then((data) => {
        //         const response = data.response;
        //         const userId = data.userId; // Retrieve the userId from the response

        //         if (response === "permanent") {
        //             localStorage.setItem("userId", userId); // Store the userId in session storage
        //             navigate("/landingpermanent");
        //         } else if (response === "sessional") {
        //             localStorage.setItem("userId", userId); // Store the userId in session storage
        //             navigate("/landingsessional");
        //         } else {
        //             alert("You are not registered");
        //         }
        //     })
        //     .catch((error) => {
        //         console.error("", error);
        //         // Handle error case
        //         alert("An error occurred. Please try again later.");
        //     });
    };

    return (
        
        <div className="flex mt-8 mb-8">
            <div className="flex flex-wrap justify-center w-1/3 m-auto text-black bg-gray-100 rounded-lg shadow-lg bg-gradient-to-br">
                {/* <form className="w-10/12 m-5" onSubmit={(e) => login(e)}> */}
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
                    >{loading ? <>Loading..</> : <>Login</>}</button>

                    {/* <Link to="/register">
                        <p className="w-full my-6 text-xs font-bold tracking-widest text-center text-gray-500 underline">
                            Don't have an account? Register here.
                        </p>
                    </Link> */}

                    {/* <div className="dropdown">
                            <ul className="menu">
                            <li className="menu-item">
                                <button>permanent</button>
                            </li>
                            <li className="menu-item">
                                <button>sessional</button>
                            </li>
                            </ul>
                    </div>           */}

                    <Link to={"/landingpermanent"}>permanent</Link>
                    <Link to={"/landingsessional"}><p>sessional</p></Link>
                </form>
            </div>
        </div>
    );
}

export default Login;
