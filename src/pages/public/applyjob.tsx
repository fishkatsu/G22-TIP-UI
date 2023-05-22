import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarPublic from "../../components/navbarpublic";

function ApplyJob() {
    const [formData, setFormData] = useState({
        jobrefNum: "",
        firstname: "",
        lastname: "",
        gender: "",
        dob: "",
        street: "",
        suburb: "",
        state: "",
        postcode: "",
        phone: "",
        email: "",
        password: "",
    });
    const [data, setData] = useState({
        timeAvailability: [],
    });
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Make the HTTP POST request to the PHP script
        fetch("http://localhost:8888/storedata.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...formData,
                timeAvailability: data.timeAvailability,
            }),
        })
            .then((response) => response.text())
            .then((data) => {
                console.log(data); // Application submitted successfully or error message
                // Optionally, you can redirect the user to a success page or perform any other action
            })
            .catch((error) => console.error("Error:", error));
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    return (
        <>
            <NavbarPublic />
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col p-10 m-8 shadow-lg">
                    <h1 className="mb-10 text-4xl font-bold">
                        Application Form
                    </h1>
                    <div className="flex flex-col">
                        <ReferenceNumber handleChange={handleChange} />
                        <PersonalDetail handleChange={handleChange} />
                        <EducationalBackground />
                        <JobExperience />
                        <TimeAvailability data={data} setData={setData} />
                        <Password handleChange={handleChange} />
                        <Button />
                    </div>
                </div>
            </form>
        </>
    );
}

function ReferenceNumber({ handleChange }: { handleChange: Function }) {
    const [jobrefNum, setJobrefNum] = useState("");

    useEffect(() => {
        const storedJobID = localStorage.getItem("jobID");
        if (storedJobID) {
            setJobrefNum(storedJobID);
            handleChange({ target: { id: "jobrefNum", value: storedJobID } });
        }
    }, [handleChange]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setJobrefNum(value);
        handleChange(e);
    };

    return (
        <>
            <div className="flex flex-wrap w-full mb-8 p-1.5">
                <div className="w-1/8">
                    <label className="text-lg font-bold">
                        Reference Number:
                    </label>
                </div>
                <div className="w-1/8">
                    <input
                        type="text"
                        id="jobrefNum"
                        maxLength={5}
                        minLength={5}
                        value={jobrefNum}
                        pattern="[a-zA-Z0-9]+"
                        required
                        placeholder="Reference number"
                        className="w-full p-2 ml-12 border border-gray-400"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
        </>
    );
}

function PersonalDetail({ handleChange }: { handleChange: Function }) {
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
                            id="firstname"
                            maxLength={20}
                            pattern="^[a-zA-Z]+$"
                            required
                            placeholder="First Name"
                            className="w-full p-2 border border-gray-400"
                            onChange={(e) => handleChange(e)}
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
                            id="lastname"
                            maxLength={20}
                            pattern="^[a-zA-Z]+$"
                            required
                            placeholder="Last Name"
                            className="w-full p-2 border border-gray-400"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mb-8">
                <div className="flex flex-wrap w-1/2">
                    <div className="w-1/4">
                        <label className="text-lg font-bold">
                            Date of Birth:
                        </label>
                    </div>
                    <input
                        type="text"
                        id="dob"
                        pattern="\d{1,2}\/\d{1,2}\/\d{4}"
                        required
                        placeholder="DD/MM/YYYY"
                        className="w-3/4 p-2 border border-gray-400"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className="flex flex-wrap w-1/2 pl-5">
                    <div className="w-1/4">
                        <label className="text-lg font-bold">Gender:</label>
                    </div>
                    <div className="w-3/4">
                        <input
                            type="radio"
                            name="gender"
                            id="gender-male"
                            required
                            value="Male"
                            onChange={(e) => handleChange(e)}
                        />
                        <label
                            className="ml-2 text-lg font-bold"
                            htmlFor="gender-male"
                        >
                            Male
                        </label>

                        <input
                            className="ml-8"
                            type="radio"
                            name="gender"
                            id="gender-female"
                            required
                            value="Female"
                            onChange={(e) => handleChange(e)}
                        />
                        <label
                            className="ml-2 text-lg font-bold"
                            htmlFor="gender-female"
                        >
                            Female
                        </label>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap mb-8">
                <div className="flex flex-wrap w-1/2">
                    <div className="w-1/4">
                        <label className="mb-2 text-lg font-bold">
                            Street:
                        </label>
                    </div>
                    <input
                        type="text"
                        id="street"
                        maxLength={40}
                        required
                        placeholder="Enter Street"
                        className="w-3/4 p-2 border border-gray-400"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className="flex flex-wrap w-1/2 pl-5">
                    <div className="w-1/4">
                        <label className="mb-2 text-lg font-bold">
                            Suburb:
                        </label>
                    </div>
                    <input
                        type="text"
                        id="suburb"
                        maxLength={40}
                        required
                        placeholder="Enter Suburb"
                        className="w-3/4 p-2 border border-gray-400"
                        onChange={(e) => handleChange(e)}
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
                        id="state"
                        required
                        className="w-3/4 p-2 border border-gray-400"
                        onChange={(e) => handleChange(e)}
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
                        <label className="mb-2 text-lg font-bold">
                            Postcode:
                        </label>
                    </div>
                    <input
                        type="text"
                        id="postcode"
                        maxLength={4}
                        minLength={4}
                        pattern="[0-9]{4}"
                        required
                        placeholder="Enter Postcode"
                        className="w-3/4 p-2 border border-gray-400"
                        onChange={(e) => handleChange(e)}
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
                        id="phone"
                        maxLength={12}
                        minLength={8}
                        pattern="^[0-9]+"
                        required
                        placeholder="Enter Phone Number"
                        className="w-3/4 p-2 border border-gray-400"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className="flex flex-wrap w-1/2 pl-5">
                    <div className="w-1/4">
                        <label className="mb-2 text-lg font-bold ">
                            Email: (it will be used for your id)
                        </label>
                    </div>
                    <input
                        type="text"
                        id="email"
                        pattern="^.+@.+\..{2,3}$"
                        required
                        placeholder="Enter Email Address"
                        className="w-3/4 p-2 border border-gray-400"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
        </div>
    );
}
function EducationalBackground() {
    return (
        <>
            <div className="p-1.5 mb-8">
                <h2 className="mb-4 text-3xl font-bold">
                    Educational Background
                </h2>
                <div className="border">
                    <div className="px-6 py-3 border rounded-lg bg-gray-50">
                        <div className="flex flex-wrap">
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Start from
                            </label>
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Graduate At
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Name of Educational Institution
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Qualification
                            </label>
                        </div>
                    </div>
                    <div className="px-6 py-3 border">
                        <div className="flex flex-wrap my-2 mb-6">
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    pattern="\d{1,2}\/\d{4}"
                                    placeholder="MM/YYYY"
                                    maxLength={7}
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    pattern="\d{1,2}\/\d{4}"
                                    placeholder="MM/YYYY"
                                    maxLength={7}
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    maxLength={60}
                                    placeholder="Enter name of the education institution"
                                    className="w-11/12 p-2 mr-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    maxLength={60}
                                    placeholder="Enter Qualification"
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                        </div>
                        <div className="flex flex-wrap my-2">
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    pattern="\d{1,2}\/\d{4}"
                                    placeholder="MM/YYYY"
                                    maxLength={7}
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    pattern="\d{1,2}\/\d{4}"
                                    placeholder="MM/YYYY"
                                    maxLength={7}
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    maxLength={60}
                                    placeholder="Enter name of the education institution"
                                    className="w-11/12 p-2 mr-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    maxLength={60}
                                    placeholder="Enter Qualification"
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function JobExperience() {
    return (
        <>
            <div className="p-1.5 mb-8">
                <h2 className="mb-4 text-3xl font-bold">Job Experience</h2>
                <div className="border">
                    <div className="px-6 py-3 border rounded-lg bg-gray-50">
                        <div className="flex flex-wrap">
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Employed from
                            </label>
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Left at
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Name of Organisation
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Position
                            </label>
                        </div>
                    </div>
                    <div className="px-6 py-3 border">
                        <div className="flex flex-wrap my-2 mb-6">
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    pattern="\d{1,2}\/\d{4}"
                                    placeholder="MM/YYYY"
                                    maxLength={7}
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    pattern="\d{1,2}\/\d{4}"
                                    placeholder="MM/YYYY"
                                    maxLength={7}
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    maxLength={60}
                                    placeholder="Enter name of the organisation"
                                    className="w-11/12 p-2 mr-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    maxLength={60}
                                    placeholder="Enter position"
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                        </div>
                        <div className="flex flex-wrap my-2">
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    pattern="\d{1,2}\/\d{4}"
                                    placeholder="MM/YYYY"
                                    maxLength={7}
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    pattern="\d{1,2}\/\d{4}"
                                    placeholder="MM/YYYY"
                                    maxLength={7}
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    maxLength={60}
                                    placeholder="Enter name of the organisation"
                                    className="w-11/12 p-2 mr-2 border border-gray-400"
                                />
                            </label>
                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                <input
                                    type="text"
                                    maxLength={60}
                                    placeholder="Enter position"
                                    className="w-11/12 p-2 border border-gray-400"
                                />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
function ProfRecognition() {
    const [rows, setRows] = useState([{ id: 1 }]);

    const addRow = () => {
        const newRow = { id: rows.length + 1 };
        setRows([...rows, newRow]);
    };

    const deleteRow = () => {
        const updatedRows = [...rows];
        updatedRows.pop();
        setRows(updatedRows);
    };

    return (
        <>
            <div className="p-1.5 mb-8">
                <h2 className="mb-4 text-3xl font-bold">
                    Professional Recognition
                </h2>
                <div className="border">
                    <div className="px-6 py-3 border rounded-lg bg-gray-50">
                        <div className="flex flex-wrap">
                            <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Start from
                            </label>

                            <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Name of Educational Institution
                            </label>
                            <label className="w-3/6 text-xs font-bold text-left text-gray-500 uppercase">
                                Qualification
                            </label>
                        </div>
                    </div>
                    {rows.map((row) => (
                        <div className="px-6 py-3 border" key={row.id}>
                            <div className="flex flex-wrap my-2">
                                <label className="w-1/6 text-xs font-bold text-left text-gray-500 uppercase">
                                    <input
                                        type="text"
                                        id={`EdYearFrom${row.id}`}
                                        pattern="\d{1,2}\/\d{4}"
                                        placeholder="MM/YYYY"
                                        maxLength={7}
                                        className="w-11/12 p-2 border border-gray-400"
                                    />
                                </label>

                                <label className="w-2/6 text-xs font-bold text-left text-gray-500 uppercase">
                                    <input
                                        type="text"
                                        id={`IssuerName${row.id}`}
                                        maxLength={60}
                                        placeholder="Enter name of issuer"
                                        className="w-11/12 p-2 mr-2 border border-gray-400"
                                    />
                                </label>
                                <label className="w-3/6 text-xs font-bold text-left text-gray-500 uppercase">
                                    <input
                                        type="text"
                                        id={`RecognitionType${row.id}`}
                                        maxLength={60}
                                        placeholder="Enter types of recognition"
                                        className="w-11/12 p-2 border border-gray-400"
                                    />
                                </label>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="px-6 py-3 border">
                    <div className="flex">
                        <button
                            onClick={addRow}
                            className="px-4 py-2 mr-6 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
                        >
                            Add Row
                        </button>
                        <button
                            onClick={deleteRow}
                            className="px-4 py-2 mr-2 text-sm font-medium text-red-500 bg-transparent border border-red-500 rounded hover:bg-red-100 focus:outline-none"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
function TimeAvailability({ data, setData }: { data: any; setData: Function }) {
    const [selectedDays, setSelectedDays] = useState<string[]>([]);

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, checked } = e.target;
        if (checked) {
            setSelectedDays((prevSelectedDays) => [...prevSelectedDays, id]);
        } else {
            setSelectedDays((prevSelectedDays) =>
                prevSelectedDays.filter((day) => day !== id)
            );
        }
        setData((prevData: any) => ({
            ...prevData,
            timeAvailability: selectedDays,
        }));
    };
    return (
        <>
            <div className="flex flex-col p-1.5 mb-8">
                <div className="mb-6">
                    <label className="text-3xl font-bold">
                        Time Availability:
                    </label>
                </div>
                <div className="flex flex-wrap">
                    <div className="mr-8">
                        <input
                            className="w-5 h-5"
                            type="checkbox"
                            id="Mon"
                            value="Mon"
                            checked={selectedDays.includes("Mon")}
                            onChange={handleCheckboxChange}
                        />
                        <label className="ml-2 text-xl">Monday</label>
                    </div>
                    <div className="mr-8">
                        <input
                            className="w-5 h-5"
                            type="checkbox"
                            id="Tue"
                            value="Tue"
                            checked={selectedDays.includes("Tue")}
                            onChange={handleCheckboxChange}
                        />
                        <label className="ml-2 text-xl">Tuesday</label>
                    </div>
                    <div className="mr-8">
                        <input
                            className="w-5 h-5"
                            type="checkbox"
                            id="Wed"
                            value="Wed"
                            checked={selectedDays.includes("Wed")}
                            onChange={handleCheckboxChange}
                        />
                        <label className="ml-2 text-xl">Wednesday</label>
                    </div>
                    <div className="mr-8">
                        <input
                            className="w-5 h-5"
                            type="checkbox"
                            id="Thu"
                            value="Thu"
                            checked={selectedDays.includes("Thu")}
                            onChange={handleCheckboxChange}
                        />
                        <label className="ml-2 text-xl">Thursday</label>
                    </div>

                    <div className="">
                        <input
                            className="w-5 h-5"
                            type="checkbox"
                            id="Fri"
                            value="Fri"
                            checked={selectedDays.includes("Fri")}
                            onChange={handleCheckboxChange}
                        />
                        <label className="ml-2 text-xl">Friday</label>
                    </div>
                </div>
            </div>
            {/* <button onClick={handleSubmit}>Submit</button> */}
        </>
    );
}

function Password({ handleChange }: { handleChange: Function }) {
    return (
        <>
            <div className="flex flex-wrap p-1.5 mb-8">
                <div className="mr-8">
                    <label className="text-3xl font-bold ">Password:</label>
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        pattern=".{8,}"
                        required
                        placeholder="Enter Password"
                        className="w-3/4 p-2 border border-gray-400"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>
        </>
    );
}

function Button() {
    return (
        <div className="p-1.5">
            <button
                type="submit"
                className="px-10 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
                Submit
            </button>
            <Link
                to="/"
                className="px-10 py-2 ml-5 font-bold text-white bg-red-500 rounded hover:bg-red-700"
            >
                Cancel
            </Link>
        </div>
    );
}

export default ApplyJob;
