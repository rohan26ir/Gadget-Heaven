import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div>
      <h2 className='text-center text-6xl font-bold'>Oops!</h2>
      <h2 className='my-5 text-3xl'>Not Found</h2>
      <p className='my-3'>Status: 404</p>

      <Link to={'/'}><p className='px-3 py-1 bg-orange-500 hover:bg-slate-400 btn mx-auto rounded-lg'>Go Back Home</p></Link>
    </div>
  );
};

export default ErrorPage;