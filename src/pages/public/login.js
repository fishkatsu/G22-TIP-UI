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
    <div className="flex h-screen">
      <div className="m-auto w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br bg-gray-100">
        <form className="m-5 w-10/12">
          <h1 className="w-full text-4xl tracking-widest text-center my-6 font-bold text-black">CorpU.</h1>
          <div className="w-full my-6">
            <input
              className="p-2 rounded-md border border-gray-300 w-full"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full my-6">
            <input
              className="p-2 rounded-md border border-gray-300 w-full"
              type="password"
              placeholder="Password"
            />
          </div>

          <Link to="/landingpermanent">
            <div className="w-full my-6">
              <button
                className="p-2 rounded-md bg-gradient-to-br bg-gray-500 text-white w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </Link>
          <Link to="/register">
            <p className="w-full text-xs tracking-widest text-center my-6 font-bold text-gray-500 underline">Don't have an account? Register here.</p>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login