import React, { useEffect } from 'react';
import Devices from '../Devices/Devices';
import Banner from '../Banner/Banner';
import AfterBanner from '../AfterBanner/AfterBanner';

const Home = () => {

  useEffect(() => {
    document.title = 'Home | GadgetHeaven';
  },[])
  
  return (
    <div className='mx-10'>
      <Banner></Banner>
      <AfterBanner></AfterBanner>
      <Devices></Devices>
    </div>
  );
};

export default Home;