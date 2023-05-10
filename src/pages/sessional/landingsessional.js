import React from 'react'
import { Link } from 'react-router-dom';

function LandingSessional() {
  return (
    <div className="">
      {/* landing permanent */}
      {/* todolist: refer to the landingpublic design  */}
      {/* make link to manageapplication, managepublish, managesessional */}
      <Jumbotron />
      {/* <Content /> */}
      <Card />
    </div>
  );
}

function Jumbotron() {
  return (
    <div
      className="h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/sessionalpage.jpg)` }}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="p-3 mb-4 text-4xl font-bold text-black bg-gray-100 rounded-full">
          Welcome to CorpU University
        </h1>
        <p className="p-3 mb-8 text-lg text-black bg-gray-100 rounded-full">
          Learn and grow with us
        </p>
        <button className="px-6 py-2 text-black bg-white rounded-full shadow-lg">
          Apply Now
        </button>
      </div>
    </div>
  );
}

function Card() {
  return (
    <>
      {/* make 3 cards, with title "Lorem Ipsum" on top of the cards */}
      <div className="flex flex-col items-center justify-center p-10 m-8 bg-gray-100 shadow-lg">
        <Link to={"/jobavailable"} className="">
          <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
            <h1 className="mb-4 text-4xl font-bold">Our vacancies</h1>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-center">
          <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
            <h1 className="mb-4 text-2xl font-bold uppercase">
              Benefits of working at CorpU
            </h1>
            <p className="mb-8 text-lg">
              At CorpU we offer you a career with many opportunities, while being part of a growing, forward-thinking organisation. We not only provide attractive benefits, we also support our staff throughout their life with CorpU by considering their unique needs and aspirations. Most importantly, we want our staff to be happy and healthy with a fulfilling career.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
            <h1 className="mb-4 text-2xl font-bold uppercase">
              Where we live and work
            </h1>
            <p className="mb-8 text-lg">
              CorpU's flagship campus is located on the beautiful Melburne. Melburne is one of Australia’s prime tourist destinations as well as a great place to live, offering a relaxed lifestyle centred around pristine white-sand beaches, stunning hinterland and subtropical forests and plenty of sunshine. The area also boasts diverse cafes, restaurants and entertainment venues as well as local markets and residents who enjoy an active, outdoor lifestyle.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
            <h1 className="mb-4 text-2xl font-bold uppercase">
              Information for applicants
            </h1>
            <p className="mb-8 text-lg">
              The University of the CorpU is an Equal Opportunity Employer, selection and appointment to the university is based on merit. The principle of 'equity' is also applied to our recruitment and selection practices; we seek to create conditions under which all persons will have an equal opportunity to seek and obtain employment.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}


export default LandingSessional