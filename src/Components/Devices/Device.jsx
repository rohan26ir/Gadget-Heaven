import React from 'react';
import { Link } from 'react-router-dom';

const Device = ({gadget}) => {
  // console.log("object", gadget);
  const {product_id, product_title, category, price, description, product_image} = gadget ;
  return (
  
    <div className='flex flex-grow'>
      
      <div className='bg-base-100 shadow-xl p-5 rounded-xl'>
        
        <div className='bg-gray-200 p-3 rounded-xl'>
        <img 
        src={product_image} 
        alt=""
        className='h-40'
         />
        </div>


         <div className='text-start space-y-2'>
          <h2 className='text-2xl font-bold mt-2'>{product_title}</h2>
          <p>Price: {price}K</p>

          <Link to={`/gadgets/${product_id}`}><button className='rounded-3xl border-[1px] border-purple-600 px-4 py-1 mt-3 hover:bg-gray-200'>View Details</button></Link>
         </div>
      </div>
    </div>
  );
};

export default Device;