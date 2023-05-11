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
      <div className=" flex flex-col items-center justify-center p-10 m-20 bg-gray-100 shadow-lg">

        <h1 className="mb-10 text-4xl font-bold">CorpU.</h1>

        <div className="flex flex-wrap w-1/3">
          <div className="w-1/4">
            <label className="text-lg font-bold">Email</label>
          </div>
          <div className="w-3/4">
            <input
              type="text"
              placeholder="email"
              className="p-2 mb-4 border border-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap w-1/3">
          <div className="w-1/4">
            <label className="text-lg font-bold">Password</label>
          </div>
          <div className="w-3/4">
            <input
              type="password"
              placeholder="password"
              className="p-2 mb-4 border border-gray-400"
            />
          </div>
        </div>

        <Link to={"/"}>
          <button className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white">
            Login
          </button>
        </Link>

      </div>
    </>
  );
}

export default Login