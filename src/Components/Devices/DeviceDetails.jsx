import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DeviceDetails = () => {

  const {gadgetID} = useParams();
  // console.log("Hello",gadgetID);

  const data = useLoaderData();
  // console.log(data);
  
  const device = data.find(device => device.product_id === gadgetID)

  const {product_id, product_title, category, price, description, product_image,specifications, availability, rating}  = device;
  
  console.log(device);
  return (
    <div className='mx-36'>
      <div className='shadow-xl bg-white rounded-xl p-8'>
        <h2>Device Deatils: {gadgetID}</h2>
         <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
           <div className='bg-slate-200 rounded-2xl'>
            <img src={product_image} alt="" />
           </div>
           <div>
             <h2 className='text-2xl font-bold'>{product_title}</h2>
             <p className='font-bold my-2'>Price: ${price}</p>
             <button className='border-2 border-green-800 text-green-700 text-sm bg-lime-100 rounded-3xl px-2 py-1'>{availability ? "In Stock" : "Sould Out"}</button>

             <p className='my-2'>{description}</p>
             <div>
              <h3 className='text-xl font-bold'>Specification:</h3>
               <div>
                {
                  specifications.map((specification, index) => <li 
                  key={index}
                    className=' text-black'>{specification}</li>)
                }
               </div>
               <h4 className='font-bold'>Rating⭐</h4>
               <div className='my-2'>
               <div className="rating">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked/>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
</div>{rating}
               </div>

               <div className='flex text-white gap-2 cursor-pointer mt-5'>
                <div className='flex items-center bg-[#8C35D4] px-4 py-1 rounded-3xl'>
                  <div className='mr-1 font-semibold'>
                  <p>Add To Card</p>
                  </div>
                  <div>
                  <img 
                  className='h-5'
                  src="/cart.png" alt="" />
                  </div>
                </div>
                <div>
                  <div className='border-[2px] border-gray-500 rounded-full p-2'>
                    <img
                    className='h-5' 
                    src="/wishlist.png" alt="" />
                  </div>
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