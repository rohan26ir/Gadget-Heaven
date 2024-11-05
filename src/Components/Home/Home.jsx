import React from 'react';
import Devices from '../Devices/Devices';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <div className='mx-10'>
      <Banner></Banner>
      <Devices></Devices>
    </div>
  );
};

export default Home;