import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarPublic from "../../components/navbarpublic";

function LandingPublic() {
    return (
        <div>
            <NavbarPublic />
            <Jumbotron />
            <Content />
            <Card />
            <ContactUs />
        </div>
    );
}

function Jumbotron() {
    return (
        <div
            className="h-screen bg-center bg-cover"
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/sessionalpage.jpg)`,
            }}
        >
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="p-3 text-4xl font-bold text-black bg-gray-100 rounded-full">
                    Welcome to CorpU University
                </h1>
                <p className="p-3 mb-8 text-lg text-black bg-gray-100 rounded-full">
                    Learn and grow with us
                </p>
                <Link to="/applyjob">
                <button className="px-6 py-2 text-3xl text-black underline bg-white rounded-full shadow-lg">
                    
                    Apply Now
                </button>
                </Link>
            </div>
        </div>
    );
}

function Content() {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-10 m-8 bg-gray-100 shadow-lg">
                <h1 className="mb-4 text-4xl font-bold">About Us</h1>
                <p className="mb-8 text-lg">
                CorpU University is a progressive educational institution that was established in 2020 
                with a vision to revolutionize higher education and empower students with the skills and 
                knowledge needed to excel in the rapidly evolving global landscape. As a forward-thinking institution, 
                CorpU University strives to provide a transformative learning experience that prepares individuals to 
                navigate the challenges and opportunities of the 21st century.
                </p>
            </div>
        </>
    );
}

function Card() {
    return (
        <>
            {/* make 3 cards, with title "Lorem Ipsum" on top of the cards */}
            <div className="flex flex-col items-center justify-center p-10 m-8 bg-gray-100 shadow-lg">
                <h1 className="mb-4 text-4xl font-bold">Our Value</h1>
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
                        <h1 className="mb-4 text-2xl font-bold">
                            Mission
                        </h1>
                        <p className="mb-8 text-lg">
                        At CorpU University, our mission is to foster innovation, 
                        cultivate critical thinking, and inspire lifelong learning. 
                        We are dedicated to nurturing the intellectual, personal, and professional growth 
                        of our students, equipping them with the tools to make a positive impact in 
                        their chosen fields. By fostering a collaborative and inclusive environment, we aim to 
                        empower individuals to become leaders, problem solvers, and agents of change in their 
                        communities and beyond.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
                        <h1 className="mb-4 text-2xl font-bold">
                        Research and Innovation
                        </h1>
                        <p className="mb-8 text-lg">
                        CorpU University is committed to fostering a culture of research and innovation that 
                        pushes the boundaries of knowledge and addresses pressing societal challenges. Our faculty 
                        and students actively engage in research projects and collaborate with industry partners, 
                        government agencies, and non-profit organizations to develop innovative solutions and contribute 
                        to the advancement of their respective fields. By promoting a research-driven environment, 
                        we encourage critical inquiry, creativity, and the pursuit of groundbreaking discoveries.
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
                        <h1 className="mb-4 text-2xl font-bold">
                        Community Engagement
                        </h1>
                        <p className="mb-8 text-lg">
                        As a socially responsible institution, CorpU University recognizes the importance of community 
                        engagement and the power of education to effect positive change. We actively encourage students, 
                        faculty, and staff to participate in community service initiatives, outreach programs, and partnerships 
                        with local organizations. Through these endeavors, we aim to foster a sense of social responsibility, 
                        promote civic engagement, and make a meaningful impact in the communities we serve.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

function ContactUs() {
    return (
        <>
            {/* About us, has 2 columns. left column has address, right column has phone and email */}
            <div className="flex flex-col items-center justify-center p-10 m-8 bg-gray-100 shadow-lg">
                <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
                        <h1 className="mb-4 text-2xl font-bold">Address</h1>
                        <p className="mb-8 text-lg">
                        John Street, Hawthorn, Victoria, Australia 3122
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center p-10 m-4 bg-white shadow-lg">
                        <h1 className="mb-4 text-2xl font-bold">Phone</h1>
                        <p className="mb-8 text-lg">
                        For general enquiries, call +61 3 8888 8888  to speak to our friendly team Monday to Friday, 9am to 5pm. 
                        Please note: General enquiries are not available on public holidays.
                        </p>
                        <h1 className="mb-4 text-2xl font-bold">Email</h1>
                        <p className="mb-8 text-lg">
                            enquire@corpu.edu.au
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPublic;
