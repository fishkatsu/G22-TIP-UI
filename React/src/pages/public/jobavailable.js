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
        <div table className="table-auto">
            <thead>
                <tr>
                    <th className="px-4 py-2">Reference Number</th>
                    <th className="px-4 py-2">Job Title</th>
                    <th className="px-4 py-2">Closing Date</th>
                    <th className="px-4 py-2">Location</th>
                    <th className="px-4 py-2">Employment Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border px-4 py-2">ST001</td>
                    <td className="border px-4 py-2">Tutor</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">Part-time</td>
                </tr>
                <tr className="bg-gray-100">
                    <td className="border px-4 py-2">ST002</td>
                    <td className="border px-4 py-2">Lecturer</td>
                    <td className="border px-4 py-2">31/12/2023</td>
                    <td className="border px-4 py-2">Clayton</td>
                    <td className="border px-4 py-2">Part-time</td>
                </tr>
            </tbody>
        </div>
        </>
    )
}
export default JobAvailable;