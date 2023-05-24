import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {

  const [user, setUser] = useState({
    email:"",
    password:"",
    firstName:"",
    lastName:"",
    phoneNo:""
  })
  const {email, password, firstName, lastName} = user;

  useEffect(() => {
    // createUser();
  }, []);

//   const createUser = async () => {
//     const result = await axios.post('http://localhost:8080/user/create', {
//         email: user.email,
//         password: user.password,
//         firstName: user.firstName,
//         lastName: user.lastName,
//         phoneNo: user.phoneNo
// 		  })
//     console.log(result);
//   };

//   const onInputChange = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value});
//   };

//   const onSubmit = async (e) => {
//     await axios.post('http://localhost:8080/user/create', {
//       email: user.email,
//       password: user.password,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       phoneNo: user.phoneNo
//     })
//   };

//   const handleLogin = (e) => {
//     // e.preventDefault()
//     await axios.post('http://localhost:8080/user/create', 
//     {
//       email: e.target.elements.email.value,
//       password: e.target.elements.password.value
//     })
//     console.log('FormData: ', data)
// }

  return (
    <>
    		<form>
				<div className="flex flex-col p-10 m-8 shadow-lg">
					<h1 className="mb-10 text-4xl font-bold">Register Form</h1>
					<div className="flex flex-col">
            {/* <UsernamePassword />
						<PersonalDetail />
						<Button /> */}
          {/* <div className="flex flex-wrap w-1/2 pl-5">
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
          </div> */}
					</div>
				</div>
        <div className="flex flex-wrap w-1/2 pl-5">
        <div className="w-1/4">
          <label className="mb-2 text-lg font-bold " htmlFor="Email">Email:</label>
        </div>
        <input
          type="text"
          id="Email"
          pattern="^.+@.+\..{2,3}$"
          required
          placeholder="Enter Email Address"
          className="w-3/4 p-2 border border-gray-400"
          value={user.email}
          // onChange={(e) => onInputChange(e)}
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
            required
            value={user.password}
            // onChange={(e) => onInputChange(e)}
					/>
				</div>
			</div>
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
              value={user.firstName}
              // onChange={(e) => onInputChange(e)}
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
              value={user.lastName}
              // onChange={(e) => onInputChange(e)}
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
      <Link to='/'> <input
				type="submit"
				value="Back"
				className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
			/> 
      </Link>
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
      <Link to='/'> <input
				type="submit"
				value="Back"
				className="w-full p-2 m-2 text-lg font-bold text-white bg-gray-500 rounded shadow-lg hover:bg-gray-400 hover:text-white"
			/> 
      </Link>
		</>
	);
}

