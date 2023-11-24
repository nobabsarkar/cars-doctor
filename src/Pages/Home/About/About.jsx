import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200 py-20 mb-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg shadow-2xl border-white border-8" />
                </div>
                <div className='lg:w-1/2 sm:mt-16 '>
                    <h3 className='text-3xl text-[#FF3811] font-bold mb-4'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-3 mt-3">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-3">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;