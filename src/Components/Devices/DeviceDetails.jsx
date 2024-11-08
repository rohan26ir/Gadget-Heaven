import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredWish } from '../Utility/addToWish';
import { addToStoredCart } from '../Utility/addToCart';

const DeviceDetails = () => {
  const { gadgetID } = useParams();
  const data = useLoaderData();
  
  const id = parseInt(gadgetID);
  const device = data.find(device => device.product_id === id);
  const { product_title, price, description, product_image, specifications, availability, rating } = device;

  const handleWishlist = (id) => {
    addToStoredWish(id);
  };

  const handleCartlist = (id) => {
    addToStoredCart(id);
  };

  return (
    <div className='mx-2 md:mx-10 -mt-8'>
      <div className='bg-[#9538E2] pt-10 pb-36'>
        <div className='text-center text-white p-3'>
          <h2 className='text-4xl font-bold'>Product Details</h2>
          <p>Explore the latest gadgets that will take your experience to the next level...</p>
        </div>
      </div>
      <div className='shadow-xl bg-white rounded-xl p-8 mx-10 md:mx-36 -mt-24'>
        <h2>Device Details: {gadgetID}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='bg-slate-200 rounded-2xl flex justify-center items-center'>
            <img src={product_image} alt={product_title} />
          </div>
          <div>
            <h2 className='text-2xl font-bold'>{product_title}</h2>
            <p className='font-bold my-2'>Price: ${price}</p>
            <button className='border-2 border-green-800 text-green-700 text-sm bg-lime-100 rounded-3xl px-2 py-1'>
              {availability ? "In Stock" : <p className='text-red-600'>Sold Out</p>}
            </button>
            <p className='my-2'>{description}</p>
            <div>
              <h3 className='text-xl font-bold'>Specification:</h3>
              <ul>
                {specifications.map((specification, index) => (
                  <li key={index} className='text-black'>{specification}</li>
                ))}
              </ul>
              <h4 className='font-bold'>Rating⭐</h4>
              <p>{rating}</p>
              <div className='flex text-white gap-2 cursor-pointer mt-5'>
                <div className='flex items-center bg-[#8C35D4] px-4 py-1 rounded-3xl' 
                onClick={() => addToStoredCart(id)}  >
                  <p className='mr-1 font-semibold'>Add To Cart</p>
                  <img className='h-5' src="/cart.png" alt="Cart" />
                </div>
                <div className='border-[2px] border-gray-500 rounded-full p-2' onClick={() => handleWishlist(id)}>
                  <img className='h-5' src="/wishlist.png" alt="Wishlist" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetails;