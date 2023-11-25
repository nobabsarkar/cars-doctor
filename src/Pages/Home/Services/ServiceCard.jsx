import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, price, _id} = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex items-center justify-between'>
                    <p className='text-xl'>Price: ${price}</p>
                    <FaArrowRight className='text-2xl' />
                </div>
                <div className="card-actions">
                    <Link className='w-full' to={`/book/${_id}`}>
                        <button className="btn bg-[#FF3811] w-full text-white">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;