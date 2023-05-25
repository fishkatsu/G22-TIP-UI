import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavbarPublic from "../../components/navbarpublic";

export default function Register() {
  let navigate = useNavigate();
  const [currentGender, setCurrentGender] = useState(String)
  const [currentState, setCurrentState] = useState(String)

  interface response {
    serial: string;
    result: string;
  }
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    street: "",
    suburb: "",
    state: "",
    postcode: "",
    phoneNo: "",
    userRole: "sessional",
  });

  const { 
    email, 
    password, 
    firstName, 
    lastName, 
    dob,
    gender,
    street,
    suburb,
    state,
    postcode,
    phoneNo
  } = user;
  const [response, setResp] = useState<AxiosResponse[]>();

  const changeGender = (e: string) => {
    setUser({ ...user, "gender": e })
    setCurrentGender(e)
    console.log('user',user)
  }
  const changeState = (e: string): void => {
    setUser({ ...user, "state": e })
    setCurrentState(e)
    console.log('user',user)
  }
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/user/create",
        user
      );
      // await axios.post('http://localhost:8080/user/create', {
      //   email: user.email,
      //   password: user.password,
      //   firstName: user.firstName,
      //   lastName: user.lastName,
      //   phoneNo: user.phoneNo
      // })
      console.log("response", response);
      if (response.status === 200) {
        alert("Register successful, please login");
        navigate("/login");
      } else if (response.status === 500) {
        alert("Register error, please try again");
        // navigate("/");
      }
    } catch (error) {
      console.log("Error", error);
      alert(error);
      // navigate("/");
    }
  };

  //   const handleLogin = (e) => {
  //     // e.preventDefault()
  //     const response = await axios.post('http://localhost:8080/user/create',
  //     {
  //       email: e.target.elements.email.value,
  //       password: e.target.elements.password.value
  //     })
  //     console.log('FormData: ', data)
  // }

  return (
    <>
      <NavbarPublic />
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="flex flex-col p-10 m-8 shadow-lg">
          <h1 className="mb-10 text-4xl font-bold">Register Form</h1>
          {/* <div className="flex flex-col">
            <UsernamePassword />
						<PersonalDetail />
						<Button />
          <div className="flex flex-wrap w-1/2 pl-5">
            <div className="w-1/4">
              <label className="mb-2 text-lg font-bold ">Email:</label>
            </div>
            <input
              type="text"
              id="Email"
              pattern="^.+@.+\..{2,3}$"
              required
              placeholder="Enter Email Address"
              className="w-3/4 p-2 border border-gray-400"
            />
          </div> 
					</div>*/}
        

        <div className="flex flex-wrap w-1/2 pl-5">
          <div className="w-1/4">
            <label className="mb-2 text-lg font-bold " htmlFor="Email">
              Email:
            </label>
          </div>
          <input
            type="text"
            id="Email"
            pattern="^.+@.+\..{2,3}$"
            required
            placeholder="Enter Email Address"
            className="w-3/4 p-2 border border-gray-400"
            name="email"
            value={email}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="flex flex-wrap p-1.5 w-1/2 pl-5">
          <div className="w-1/4">
            <label className="mb-2 text-lg font-bold " htmlFor="Password">
              Password:
            </label>
          </div>
          <div>
            <input
              className="p-2 border border-gray-400 "
              type="password"
              placeholder="Type password"
              required
              name="password"
              value={password}
              onChange={(e) => onInputChange(e)}
            />
          </div>
        </div>
        <div className="p-1.5">
          <h2 className="mb-8 text-3xl font-bold">Personal Detail</h2>
          <div className="flex flex-wrap mb-8">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/4">
                <label className="text-lg font-bold" htmlFor="firstName">
                  First Name:
                </label>
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  id="FirstName"
                  maxLength={20}
                  pattern="^[a-zA-Z]+$"
                  required
                  placeholder="First Name"
                  className="w-full p-2 border border-gray-400"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>

            <div className="flex flex-wrap w-1/2 pl-5">
              <div className="w-1/4">
                <label className="text-lg font-bold" htmlFor="lastName">
                  Last Name:
                </label>
              </div>
              <div className="w-3/4">
                <input
                  type="text"
                  id="LastName"
                  maxLength={20}
                  pattern="^[a-zA-Z]+$"
                  required
                  placeholder="Last Name"
                  className="w-full p-2 border border-gray-400"
                  name="lastName"
                  value={lastName}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap mb-8">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/4">
                <label className="text-lg font-bold" htmlFor="dob">Date of Birth:</label>
              </div>
              <input
                type="text"
                id="DOB"
                pattern="\d{1,2}\/\d{1,2}\/\d{4}"
                required
                placeholder="DD/MM/YYYY"
                className="w-3/4 p-2 border border-gray-400"
                name="dob"
                value={dob}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="flex flex-wrap w-1/2 pl-5">
              <div className="w-1/4">
                <label className="text-lg font-bold" htmlFor="gender">Gender:</label>
              </div>
              
              <select required 
                className="w-3/4 p-2 border border-gray-400"
                onChange={(e) => changeGender(e.target.value)}
                name="gender"
                value={gender}
                // onChange={(value) => {
                //   setUser({ ...user, [gender]: value })
                // }}
              >
                <option value="">Please Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {/* <div className="w-3/4">
                <input type="radio" name="gender" id="Male" required />
                <label className="ml-2 text-lg font-bold">Male</label>
                <input
                  className="ml-8"
                  type="radio"
                  name="gender"
                  id="gender"
                  required
                />
                <label className="ml-2 text-lg font-bold">Female</label>
              </div> */}
            </div>
          </div>

          <div className="flex flex-wrap mb-8">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/4">
                <label className="mb-2 text-lg font-bold" htmlFor="street">Street:</label>
              </div>
              <input
                type="text"
                id="Street"
                maxLength={40}
                required
                placeholder="Enter Street"
                className="w-3/4 p-2 border border-gray-400"
                name="street"
                value={street}
                onChange={(e) => onInputChange(e)}
              />
            </div>

            <div className="flex flex-wrap w-1/2 pl-5">
              <div className="w-1/4">
                <label className="mb-2 text-lg font-bold">Suburb:</label>
              </div>
              <input
                type="text"
                id="Suburb"
                maxLength={40}
                required
                placeholder="Enter Suburb"
                className="w-3/4 p-2 border border-gray-400"
                name="suburb"
                value={suburb}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-8">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/4">
                <label className="mb-2 text-lg font-bold" htmlFor="state">State:</label>
              </div>
              <select
                name="state"
                id="State"
                required
                className="w-3/4 p-2 border border-gray-400"
                value={state}
                // value={currentState}
                onChange={(e) => changeState(e.target.value)}
                // onChange={(value) => {
                //   setUser({ ...user, [state]: value })
                // }}              
                >
                <option value="">Please Select</option>
                <option id="VIC" value="VIC">
                  VIC
                </option>
                <option id="NSW" value="NSW">
                  NSW
                </option>
                <option id="QLD" value="QLD">
                  QLD
                </option>
                <option id="NT" value="NT">
                  NT
                </option>
                <option id="WA" value="WA">
                  WA
                </option>
                <option id="SA" value="SA">
                  SA
                </option>
                <option id="TAS" value="TAS">
                  TAS
                </option>
                <option id="ACT" value="ACT">
                  ACT
                </option>
              </select>
            </div>

            <div className="flex flex-wrap w-1/2 pl-5">
              <div className="w-1/4">
                <label className="mb-2 text-lg font-bold" htmlFor="postcode">Postcode:</label>
              </div>
              <input
                type="text"
                id="Postcode"
                maxLength={4}
                minLength={4}
                pattern="[0-9]{4}"
                required
                placeholder="Enter Postcode"
                className="w-3/4 p-2 border border-gray-400"
                name="postcode"
                value={postcode}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-wrap mb-8">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/4">
                <label className="mb-2 text-lg font-bold" htmlFor="phoneNo">Phone:</label>
              </div>
              <input
                type="text"
                id="phoneNo"
                maxLength={12}
                minLength={8}
                pattern="^[0-9]+"
                required
                placeholder="Enter Phone Number"
                className="w-3/4 p-2 border border-gray-400"
                name="phoneNo"
                value={phoneNo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="p-1.5">
            <button
                type="submit"
                className="px-10 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
                Submit
            </button>
            <button
                type="reset"
                className="px-10 py-2 ml-5 font-bold text-white bg-gray-500 rounded hover:bg-gray-700"
            >
                Reset
            </button>
            <Link
                to="/"
                className="px-10 py-2 ml-5 font-bold text-white bg-red-500 rounded hover:bg-red-700"
            >
                Cancel
            </Link>
        </div>
        {/* <input
          type="submit"
          value="Submit"
          className="w-1/4 p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
        />
        <input
          type="reset"
          value="Reset"
          className="w-3/4 p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
        />
        <Link to="/">
          {" "}
          <input
            type="submit"
            value="Back"
            className="w-3/4 p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
          />
        </Link> */}
        </div>
      </form>
    </>
  );
}
function UsernamePassword() {
  return (
    <>
      <div className="flex flex-wrap w-1/2 pl-5">
        <div className="w-1/4">
          <label className="mb-2 text-lg font-bold ">Email:</label>
        </div>
        <input
          type="text"
          id="Email"
          pattern="^.+@.+\..{2,3}$"
          required
          placeholder="Enter Email Address"
          className="w-3/4 p-2 border border-gray-400"
        />
      </div>
      <div className="flex flex-wrap p-1.5 w-1/2 pl-5">
        <div className="w-1/4">
          <label className="mb-2 text-lg font-bold ">Password:</label>
        </div>
        <div>
          <input
            className="p-2 border border-gray-400 "
            type="password"
            placeholder="Type password"
          />
        </div>
      </div>
    </>
  );
}
function PersonalDetail() {
  return (
    <div className="p-1.5">
      <h2 className="mb-8 text-3xl font-bold">Personal Detail</h2>
      <div className="flex flex-wrap mb-8">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/4">
            <label className="text-lg font-bold">First Name:</label>
          </div>
          <div className="w-3/4">
            <input
              type="text"
              id="FirstName"
              maxLength={20}
              pattern="^[a-zA-Z]+$"
              required
              placeholder="First Name"
              className="w-full p-2 border border-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap w-1/2 pl-5">
          <div className="w-1/4">
            <label className="text-lg font-bold">Last Name:</label>
          </div>
          <div className="w-3/4">
            <input
              type="text"
              id="LastName"
              maxLength={20}
              pattern="^[a-zA-Z]+$"
              required
              placeholder="Last Name"
              className="w-full p-2 border border-gray-400"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mb-8">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/4">
            <label className="text-lg font-bold">Date of Birth:</label>
          </div>
          <input
            type="text"
            id="DOB"
            pattern="\d{1,2}\/\d{1,2}\/\d{4}"
            required
            placeholder="DD/MM/YYYY"
            className="w-3/4 p-2 border border-gray-400"
          />
        </div>
        <div className="flex flex-wrap w-1/2 pl-5">
          <div className="w-1/4">
            <label className="text-lg font-bold">Gender:</label>
          </div>
          <div className="w-3/4">
            <input type="radio" name="gender" id="Male" required />
            <label className="ml-2 text-lg font-bold">Male</label>

            <input
              className="ml-8"
              type="radio"
              name="gender"
              id="Female"
              required
            />
            <label className="ml-2 text-lg font-bold">Female</label>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mb-8">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/4">
            <label className="mb-2 text-lg font-bold">Street:</label>
          </div>
          <input
            type="text"
            id="Street"
            maxLength={40}
            required
            placeholder="Enter Street"
            className="w-3/4 p-2 border border-gray-400"
          />
        </div>

        <div className="flex flex-wrap w-1/2 pl-5">
          <div className="w-1/4">
            <label className="mb-2 text-lg font-bold">Suburb:</label>
          </div>
          <input
            type="text"
            id="Suburb"
            maxLength={40}
            required
            placeholder="Enter Suburb"
            className="w-3/4 p-2 border border-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-8">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/4">
            <label className="mb-2 text-lg font-bold">State:</label>
          </div>
          <select
            name="state"
            id="State"
            required
            className="w-3/4 p-2 border border-gray-400"
          >
            <option value="">Please Select</option>
            <option id="VIC" value="VIC">
              VIC
            </option>
            <option id="NSW" value="NSW">
              NSW
            </option>
            <option id="QLD" value="QLD">
              QLD
            </option>
            <option id="NT" value="NT">
              NT
            </option>
            <option id="WA" value="WA">
              WA
            </option>
            <option id="SA" value="SA">
              SA
            </option>
            <option id="TAS" value="TAS">
              TAS
            </option>
            <option id="ACT" value="ACT">
              ACT
            </option>
          </select>
        </div>

        <div className="flex flex-wrap w-1/2 pl-5">
          <div className="w-1/4">
            <label className="mb-2 text-lg font-bold">Postcode:</label>
          </div>
          <input
            type="text"
            id="Postcode"
            maxLength={4}
            minLength={4}
            pattern="[0-9]{4}"
            required
            placeholder="Enter Postcode"
            className="w-3/4 p-2 border border-gray-400"
          />
        </div>
      </div>
      <div className="flex flex-wrap mb-8">
        <div className="flex flex-wrap w-1/2">
          <div className="w-1/4">
            <label className="mb-2 text-lg font-bold">Phone:</label>
          </div>
          <input
            type="text"
            id="PhoneNum"
            maxLength={12}
            minLength={8}
            pattern="^[0-9]+"
            required
            placeholder="Enter Phone Number"
            className="w-3/4 p-2 border border-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <>
      <input
        type="submit"
        value="Submit"
        className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
      />

      <input
        type="reset"
        value="Reset"
        className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
      />
      <Link to="/">
        {" "}
        <input
          type="submit"
          value="Back"
          className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
        />
      </Link>
    </>
  );
}
