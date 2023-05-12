import React from 'react'
import { Link } from "react-router-dom";


function Login() {
  return (
    <>
      {/* landing permanent */}
      {/* todolist: refer to the landingpublic design  */}
      {/* make link to manageapplication, managepublish, managesessional */}
      {/* <Jumbotron /> */}
      {/* <Content /> */}
      <LoginForm />
    </>
  )
}

function LoginForm() {
  return (
    <>
      {/* make content with title and paragraph, with 90% width, with shadow */}
      <div className=" flex flex-col items-center mx-auto justify-center p-10 m-20 bg-gray-100 shadow-lg w-2/5 ">

        <h1 className="mb-10 text-4xl font-bold">CorpU.</h1>
        <from>
          <div className="flex flex-wrap">
            <div className=" mr-5">
              <label className="text-lg font-bold" htmlFor="email">Email</label>
            </div>
            <div className="">
              <input
                value="email"
                type="email"
                id="email"
                name="email"
                placeholder="youremail@gmail.com"
                className="p-2 mb-4 border border-gray-400 w-64"
              />
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="mr-5">
              <label className="text-lg font-bold" htmlFor="password">Password</label>
            </div>
            <div className="">
              <input
                value="password"
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className="p-2 mb-4 border border-gray-400 w-64"
              />
            </div>
          </div>

          <Link to={"/"}>
            <button type="submit" className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white">
              Login
            </button>
          </Link>
        </from>
        <Link to={"/register"}>
          <button className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white">Don't have an account? Register here.</button>
        </Link>
      </div>
    </>
  );
}

export default Login