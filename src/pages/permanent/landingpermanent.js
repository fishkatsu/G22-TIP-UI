import React from 'react'

const LandingPermanent = () => {
  return (
    <div className="flex flex-col min-h-screen">
        {/* landing permanent */}
        {/* todolist: refer to the landingpublic design  */}
        {/* make link to manageapplication, managepublish, managesessional */}
        {/* <Jumbotron /> */}
        <Content />
        <Card />
    </div>
  )
}

  function Jumbotron(){
    return(
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/pic1.jpg)` }}>
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-black text-4xl font-bold mb-4 bg-gray-100 p-3 rounded-full">Welcome to CorpU University</h1>
            <p className="text-black text-lg mb-8 bg-gray-100 p-3 rounded-full">Learn and grow with us</p>
            <button className="bg-white text-black px-6 py-2 rounded-full shadow-lg">
            Apply Now
            </button>
        </div>
    </div>
    );
  }

  function Content(){
    return(
        <>
            {/* make content with title and paragraph, with 90% width, with shadow */}
            <div className="flex flex-col justify-center items-center bg-gray-100 p-10 shadow-lg m-8">
                <h1 className="text-4xl font-bold mb-4">Hello John,</h1>
                <p className="text-lg mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
        </>
    )
  }

  function Card(){
    return(
        <>
            {/* make 3 cards, with title "Lorem Ipsum" on top of the cards */}
            <div className="flex flex-col justify-center items-center bg-gray-100 p-10 shadow-lg m-8">
                <h1 className="text-4xl font-bold mb-4">Popular Job</h1>
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center bg-white p-10 shadow-lg m-4">
                        <h1 className="text-2xl font-bold mb-4">IT - Software testing</h1>
                        <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white p-10 shadow-lg m-4">
                        <h1 className="text-2xl font-bold mb-4">Designer - UI UX</h1>
                        <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.

                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white p-10 shadow-lg m-4">
                        <h1 className="text-2xl font-bold mb-4">Data - Data Management</h1>
                        <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    )
  }

  function ContactUs(){
    return(
        <>
            {/* About us, has 2 columns. left column has address, right column has phone and email */}
            <div className="flex flex-col justify-center items-center bg-gray-100 p-10 shadow-lg m-8">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <div className="flex flex-row justify-center items-center">
                    <div className="flex flex-col justify-center items-center bg-white p-10 shadow-lg m-4">
                        <h1 className="text-2xl font-bold mb-4">Address</h1>
                        <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-white p-10 shadow-lg m-4">
                        <h1 className="text-2xl font-bold mb-4">Phone</h1>
                        <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        </p>
                        <h1 className="text-2xl font-bold mb-4">Email</h1>
                        <p className="text-lg mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
  }

export default LandingPermanent