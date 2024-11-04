import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

  const NavBarlink = <>
    <li className='mx-2 '><NavLink to={'/'}>Home</NavLink></li>
    <li className='mx-2 '><NavLink to={'/Statistics'}>Statistics</NavLink></li>
    <li className='mx-2 '><NavLink to={"/Dashboard"}>Dashboard</NavLink></li>
    </>

  return (
    <div className='mx-10 my-4'>
      <div className="navbar bg-[#9538E2] rounded-lg px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {
        NavBarlink
      }
      </ul>
    </div>
    <Link className="btn btn-ghost text-white font-bold text-xl">Gadget Haven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        NavBarlink
      }
    </ul>
  </div>
  <div className="navbar-end flex">
    <div className='h-8 w-8 p-1 mx-1 cursor-pointer bg-white rounded-full'>
      <img className='h-5 pt-1 m-auto' src="./cart.png" alt="" />
    </div>
    <div className='h-8 w-8 p-1 mx-1 cursor-pointer bg-white rounded-full'>
      <img className='h-5 pt-1 m-auto' src="./wishlist.png" alt="" />
    </div>
  </div>
</div>
    </div>
  );
};

export default NavBar;