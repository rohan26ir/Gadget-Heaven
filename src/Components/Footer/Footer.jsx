import React from 'react';

const Footer = () => {
  return (
    <div>
      <div>
        <footer className='bg-white shadow-xl mt-10 pt-5'>

          <div className=''>
          <h2 className='text-center font-bold text-3xl mb-2'>Gadget Heaven</h2>
          <p className='text-center'>Leading the way in cutting-edge technology and innovation.</p>
          </div>
           
           <div className='border-b-[1px] border-gray-400 w-[70%] mx-auto my-4'></div>

          <div className='grid grid-cols-1 md:grid-cols-3 justify-center text-center mx-64 py-10'>
            <div>
              <h2 className='text-xl font-bold'>Services</h2>
              <p>Product Support</p>
              <p>Order Tracking</p>
              <p>Shipping & Delivery</p>
              <p>Returns</p>
            </div>
            <div>
              <h2 className='text-xl font-bold'>Company</h2>
              <p>About Us</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
            <div>
              <h2 className='text-xl font-bold'>Legal</h2>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;