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
                    <th className="px-4 py-2">Job Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">BF01T</td>
                    <td className="border px-4 py-2">Tutor</td>
                    <td className="border px-4 py-2">Business</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Full Time</td>
                    <td className="border px-4 py-2">bla bla bla<br></br>bla bla bla<br></br><a href = "">More Details</a></td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">CS01T</td>
                    <td className="border px-4 py-2">Tutor</td>
                    <td className="border px-4 py-2">Computer Science</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Geelong</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Full Time</td>
                    <td className="border px-4 py-2">bla bla bla<br></br>bla bla bla<br></br><a href = "">More Details</a></td>
                </tr>
                <tr>
                    <td className="border px-4 py-2">AF01T</td>
                    <td className="border px-4 py-2">Tutor</td>
                    <td className="border px-4 py-2">Art</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Full Time</td>
                    <td className="border px-4 py-2">bla bla bla<br></br>bla bla bla<br></br><a href = "">More Details</a></td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">CS02L</td>
                    <td className="border px-4 py-2">Lecturer</td>
                    <td className="border px-4 py-2">Computer Science</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Geelong</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Full Time</td>
                    <td className="border px-4 py-2">bla bla bla<br></br>bla bla bla<br></br><a href = "">More Details</a></td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">EF02L</td>
                    <td className="border px-4 py-2">Lecturer</td>
                    <td className="border px-4 py-2">Education</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Full Time</td>
                    <td className="border px-4 py-2">bla bla bla<br></br>bla bla bla<br></br><a href = "">More Details</a></td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">HS02L</td>
                    <td className="border px-4 py-2">Lecturer</td>
                    <td className="border px-4 py-2">Health Science</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">1 Year Contract<br></br>Full Time</td>
                    <td className="border px-4 py-2">bla bla bla<br></br>bla bla bla<br></br><a href = "">More Details</a></td>
                </tr>
            </tbody>
            </table>
        </div>
        </>
    )
}
export default JobAvailable;