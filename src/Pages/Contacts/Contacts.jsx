import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Contacts = () => {
    return (
        <div className='bg-black p-16 mb-10 rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='flex items-center'>
                <FaCalendarAlt className='text-[#FF3811] text-3xl mr-5' />
                <div>
                    <p>We are open monday-friday</p>
                    <h1 className="text-3xl">7:00 am - 9:00 pm</h1>
                </div>

            </div>
            <div className='flex items-center'>
                <FaPhoneVolume className='text-[#FF3811] text-3xl mr-5' />
                <div>
                    <p>Have a question?</p>
                    <h1 className="text-3xl">+2546 251 2658</h1>
                </div>

            </div>
            <div className='flex items-center'>
                <IoLocationSharp className='text-[#FF3811] text-3xl mr-5' />
                <div>
                    <p>Need a repair? our address</p>
                    <h1 className="text-3xl">Liza Street, New York</h1>
                </div>

            </div>
        </div>
    );
};

export default Contacts;