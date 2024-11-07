import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {


  useEffect(() => {
    document.title= "Error 404 | GadgetHeaven";
  },[])
  return (
    <div className='flex flex-col text-center justify-center my-10'>
     <div>
     <h2 className='text-6xl font-bold'>Oops!</h2>
      <p className='my-5 text-3xl'>Not Found</p>
      <p className='my-3'>Status: 404</p>

      <Link to={'/'}><p className='px-3 py-1 bg-orange-500 hover:bg-slate-400 btn mx-auto rounded-lg'>Go Back Home</p></Link>
     </div>
    </div>
  );
};

export default ErrorPage;