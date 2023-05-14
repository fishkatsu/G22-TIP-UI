import { Link } from "react-router-dom";

function JobAvailable(){
    return(
        <>
        <JobTable />
        </>

    )
}

function JobTable() {
    // save ID of the job that user clicked
    const handleClick = (e) => {
        localStorage.setItem("jobID", e.target.id);
    }
    
    return(
        <>
        <div table className="mx-20 mt-10 border-2 border-gray-900">
            <table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Reference Number</th>
                    <th className="px-4 py-2">Job Title</th>
                    <th className="px-4 py-2">Faculty</th>
                    <th className="px-4 py-2">Closing Date</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Employment Type</th>
                    <th className="px-20 py-2">Qualification Requirement</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2 border-gray-900">
                        BF01T
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Tutor (Master Program)
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Business
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        31/12/2023
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Clayton
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        1 Year Contract<br></br>
                        Part Time
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Doctorate degree or demonstrable equivalent professional experience is required.
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        <Link to={"/applyjob"}>
							<button id="BF01T" className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white" onClick={handleClick}>
								Apply
							</button>
						</Link>
                    </td>       
                </tr>
                <tr>
                    <td className="border px-4 py-2  border-gray-900">
                        CS01T
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Tutor (Bachelor Program)
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Computer Science
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        31/12/2023
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Geelong
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        1 Year Contract<br></br>Part Time
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Master degree with extensive industry experience over many years and tertiary teaching experience are required.
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        <Link to={"/applyjob"}>
							<button id="CS01T" className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white" onClick={handleClick}>
								Apply
							</button>
						</Link>
                    </td>  
                </tr>
                <tr>
                    <td className="border px-4 py-2  border-gray-900">
                        AF01T
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Tutor (Bachelor Program)
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Art
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        31/12/2023
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Clayton
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        1 Year Contract<br></br>Part Time
                    </td>
                    <td className="border px-4 py-2  border-gray-900"> 
                        Master degree with extensive industry experience over many years and tertiary teaching experience are required.
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        <Link to={"/applyjob"}>
							<button id="AF01T "className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white" onClick={handleClick}>
								Apply
							</button>
						</Link>
                    </td>  
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2  border-gray-900">
                        CS02L
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Lecturer
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Computer Science
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        31/12/2023
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Geelong
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        1 Year Contract<br></br>Part Time
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Doctorate degree or demonstrable equivalent professional experience is required.
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        <Link to={"/applyjob"}>
							<button id="CS02L" className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white" onClick={handleClick}>
								Apply
							</button>
						</Link>
                    </td>   
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2  border-gray-900">
                        EF02L
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Lecturer
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Education
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        31/12/2023
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Clayton
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        1 Year Contract<br></br>Part Time
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Doctorate degree or demonstrable equivalent professional experience is required.
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        <Link to={"/applyjob"}>
							<button id="EF02L" className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white" onClick={handleClick}>
								Apply
							</button>
						</Link>
                    </td>  
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2  border-gray-900">
                        HS02L
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Lecturer
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Health Science
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        31/12/2023
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Clayton
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        1 Year Contract<br></br>Part Timee
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        Doctorate degree or demonstrable equivalent professional experience is required.
                    </td>
                    <td className="border px-4 py-2  border-gray-900">
                        <Link to={"/applyjob"}>
							<button id="HS02L" className="w-full font-bold text-white bg-gray-500 rounded shadow-lg text-m hover:bg-gray-400 hover:text-white" onClick={handleClick}>
								Apply
							</button>
						</Link>
                    </td>   
                </tr>
            </tbody>
            </table>
        </div>
        </>
    )
}

    
export default JobAvailable;