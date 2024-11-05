import React, { useEffect, useState } from 'react';
import Device from './Device';
import DevicesCategory from './DevicesCategory';

const Devices = () => {
  const [gadgets, setGadget] = useState([]);

  useEffect(() =>  {
    fetch("./device.json")
     .then(res => res.json())
     .then(data => setGadget(data))
  },[])

  return (
    <div className='my-5'>
      <h2 className='text-4xl text-center font-bold'>Explore Cutting-Edge Gadgets</h2>

      <h3 className='my-10 text-center'>Gadget : {gadgets.length}</h3>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-20'>
        <div className='col-span-1'>
          <DevicesCategory></DevicesCategory>
        </div>
        <div className='col-span-3'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {
         gadgets.map(gadget => <Device key={gadget.product_id} gadget={gadget}></Device>)
        }
      </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;