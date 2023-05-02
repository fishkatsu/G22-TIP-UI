function JobAvailable(){
    return(
        <>
        <JobAds />
        </>
    )
}

function JobAds(){
    return(
        <>
            {/* make content with title and paragraph, with 90% width, with shadow */}
            <div className="flex flex-col justify-left items-left bg-gray-100 p-10 shadow-lg m-8">
                <h1 className="text-4xl font-bold mb-4">Sessional Tutor</h1>
                <p className="text-lg mb-6">Reference Number: ST001</p>
                <p className="text-lg mb-6">Closing Date: 31/12/2023</p>
                <p className="text-lg mb-6">Location: Clayton</p>
                <p className="text-lg mb-6">Employment Type: Part-time</p> 
            {/*i want to make this button to be on the right side of the content */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply Now
                </button>
            </div>
            <div className="flex flex-col justify-left items-left bg-gray-100 p-10 shadow-lg m-8">
                <h1 className="text-4xl font-bold mb-4">Sessional Lecturer</h1>
                <p className="text-lg mb-6">Reference Number: ST002</p>
                <p className="text-lg mb-6">Closing Date: 31/12/2023</p>
                <p className="text-lg mb-6">Location: Clayton</p>
                <p className="text-lg mb-6">Employment Type: Part-time</p> 
            {/*i want to make this button to be on the right side of the content */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Apply Now
                </button>
            </div>
        </>
    )
}
export default JobAvailable;