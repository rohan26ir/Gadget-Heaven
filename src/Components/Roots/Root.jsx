import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <>
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <ToastContainer />
      <Footer></Footer>
    </div>
    </>
    
  );
};

export default Root;