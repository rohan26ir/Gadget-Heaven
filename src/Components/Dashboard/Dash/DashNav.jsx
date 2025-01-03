import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const DashNav = () => {

  useEffect(() => {
    document.title= 'Dashboard | GadgetHaven'
  },[])
  const location = useLocation();

  return (
    <div className='flex justify-center'>
      <div className='flex gap-4 text-center my-10 '>
        <NavLink to='carts'>
          <div
            className={`px-6 py-1 rounded-2xl ${
              location.pathname === '/Dashboard/carts' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <p>Cart</p>
          </div>
        </NavLink>
        <NavLink to='wishlist'>
          <div
            className={`px-6 py-1 rounded-2xl ${
              location.pathname === '/Dashboard/wishlist' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            <p>Wishlist</p>
          </div>
        </NavLink>
      </div>    
    </div>
  );
};

export default DashNav;
