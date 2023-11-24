import React from 'react';
import team1 from '../../../assets/images/team/1.jpg'
import team2 from '../../../assets/images/team/2.jpg'
import team3 from '../../../assets/images/team/3.jpg'
import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Team = () => {
    return (
        <div>
            <div className='w-1/2 mx-auto text-center'>
                <h3 className="text-2xl text-[#FF3811]">Team</h3>
                <h2 className="sm:text-3xl lg:text-5xl font-bold py-3">Meet Our Team</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-6'>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className='flex items-center'>
                            <FaFacebookF className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                            <FaTwitter className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                            <FaLinkedinIn className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                            <FaInstagramSquare className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                        </div>
                    </div>

                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className='flex items-center'>
                            <FaFacebookF className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                            <FaTwitter className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                            <FaLinkedinIn className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                            <FaInstagramSquare className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                        </div>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={team3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Car Engine Plug</h2>
                        <p>Engine Expert</p>
                        <div className='flex items-center'>
                            <FaFacebookF className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                            <FaTwitter className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                            <FaLinkedinIn className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                            <FaInstagramSquare className='bg-[#FF3811] mr-2 text-2xl rounded-full p-1 text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;