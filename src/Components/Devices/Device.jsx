import React from 'react';

const Device = ({gadget}) => {
  console.log("object", gadget);
  const {product_id, product_title, category, price, description, product_image} = gadget ;
  return (
  
    <div className='flex flex-grow'>
      
      <div className='bg-base-100 shadow-xl p-5 rounded-xl'>
        <img 
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" 
        alt=""
        className=''
         />


         <div className='text-start space-y-2'>
          <h2 className='text-2xl font-bold mt-2'>{product_title}</h2>
          <p>Price: {price}K</p>

          <button className='rounded-3xl border-2 border-purple-600 px-4 py-1 hover:bg-gray-200'>View Details</button>
         </div>
      </div>
    </div>
  );
};

export default Device;