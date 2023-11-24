import React from 'react';
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
    const {picture, name, price} = product
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <p className='flex'>
                <FaStar className='mr-1 text-[#FF912C]' />
                <FaStar className='mr-1 text-[#FF912C]' />
                <FaStar className='mr-1 text-[#FF912C]' />
                <FaStar className='mr-1 text-[#FF912C]' />
                <FaStar className='mr-1 text-[#FF912C]' />
                </p>
                <h2 className="card-title">{name}</h2>
                <p className='text-[#FF3811]'>${price}.00</p>
                <div className="card-actions">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default Product;