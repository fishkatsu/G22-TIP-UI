function JobAvailable(){
    return(
        <>
        <JobTable />
        </>

    )
}

function JobTable() {
    return(
        <>
        <div table className="mx-auto max-w-2xl">
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
                    <td className="border px-4 py-2">BF01T</td>
                    <td className="border px-4 py-2">Tutor (Master Program)</td>
                    <td className="border px-4 py-2">Business</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Part Time</td>
                    <td className="border px-4 py-2">Doctorate degree or demonstrable equivalent professional experience is required.</td>
                    <td className="border px-4 py-2"><a href = "applyjob" id='BF01T'>Apply</a></td>       
                </tr>
                <tr>
                    <td className="border px-4 py-2">CS01T</td>
                    <td className="border px-4 py-2">Tutor (Bachelor Program)</td>
                    <td className="border px-4 py-2">Computer Science</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Geelong</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Part Time</td>
                    <td className="border px-4 py-2"> Master degree with extensive industry experience over many years and tertiary teaching experience are required.</td>
                    <td className="border px-4 py-2"><a href = "applyjob" id='CS01T'>Apply</a></td> 
                </tr>
                <tr>
                    <td className="border px-4 py-2">AF01T</td>
                    <td className="border px-4 py-2">Tutor (Bachelor Program)</td>
                    <td className="border px-4 py-2">Art</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Part Time</td>
                    <td className="border px-4 py-2"> Master degree with extensive industry experience over many years and tertiary teaching experience are required.</td>
                    <td className="border px-4 py-2"><a href = "applyjob" id='AF01T'>Apply</a></td> 
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">CS02L</td>
                    <td className="border px-4 py-2">Lecturer</td>
                    <td className="border px-4 py-2">Computer Science</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Geelong</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Part Time</td>
                    <td className="border px-4 py-2">Doctorate degree or demonstrable equivalent professional experience is required.</td>
                    <td className="border px-4 py-2"><a href = "applyjob" id='CS02L'>Apply</a></td> 
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">EF02L</td>
                    <td className="border px-4 py-2">Lecturer</td>
                    <td className="border px-4 py-2">Education</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Part Time</td>
                    <td className="border px-4 py-2">Doctorate degree or demonstrable equivalent professional experience is required.</td>
                    <td className="border px-4 py-2"><a href = "applyjob" id='EF02L'>Apply</a></td> 
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">HS02L</td>
                    <td className="border px-4 py-2">Lecturer</td>
                    <td className="border px-4 py-2">Health Science</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Part Timee</td>
                    <td className="border px-4 py-2">Doctorate degree or demonstrable equivalent professional experience is required.</td>
                    <td className="border px-4 py-2"><a href = "applyjob" id='HS02L'>Apply</a></td> 
                </tr>
            </tbody>
            </table>
        </div>
        </>
    )
}

    
export default JobAvailable;