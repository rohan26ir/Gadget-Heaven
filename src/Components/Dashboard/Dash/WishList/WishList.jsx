import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

const WishList = ({ book, onDelete }) => {
  const { product_id, product_image, product_title, description, price } = book;

  return (
    <div className='mx-5 md:mx-24'>
      <div className='grid grid-cols-11 gap-5 bg-gray-100 rounded-xl shadow-xl p-4'>
        <div className='col-span-11 md:col-span-2 p-1 bg-gray-400 rounded-2xl'>
          <div className='flex justify-center items-center  p-2'>
            <img className='h-[150px]' src={product_image} alt="" />
          </div>
        </div>
        <div className='col-span-11 md:col-span-7 flex justify-start items-center'>
          <div className='space-y-2'>
            <h2 className='text-xl font-bold'>{product_title}</h2>
            <p><span className='font-bold'>Description:</span> {description}</p>
            <p className='font-bold'>Price: ${price}</p>
            <button className='bg-[#9538E2] px-4 py-1 rounded-3xl'>Add to Cart</button>
          </div>
        </div>
        <div className='col-span-11 md:col-span-2 flex justify-end items-start'>
          <div className='h-9 w-8 border-[2px] border-red-600 hover:bg-blue-500 px-4 py-1 rounded-full flex justify-center items-center'>
          <button
            onClick={() => onDelete(product_id)}
            className='font-bold'>
            <p><AiOutlineDelete /></p>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;