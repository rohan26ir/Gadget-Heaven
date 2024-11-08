import React, { useEffect, useState } from 'react';
import Device from './Device';
import DevicesCategory from './DevicesCategory';

const Devices = () => {
  const [gadgets, setGadgets] = useState([]);
  const [categories, setCategories] = useState(['All Product']);
  const [selectedCategory, setSelectedCategory] = useState('All Product');

  useEffect(() => {
    fetch("./device.json")
      .then(res => res.json())
      .then(data => {
        setGadgets(data);
        setUniqueCategories(data);});
  },[]);

  const setUniqueCategories = (data) => {
    const deviceCategories = ['All Product', ...new Set(data.map(gadget => gadget.category))];
    setCategories(deviceCategories);
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  // filter gadgets base on select cate
  const displayDevice = selectedCategory === 'All Product' ;

  const displayedGadgets = displayDevice ? gadgets : gadgets.filter(gadget => gadget.category === selectedCategory);

  return (
    <div className='my-5'>
      <h2 className='text-4xl text-center font-bold'>Explore Cutting-Edge Gadgets</h2>
      {/* <h3 className='my-10 text-center'>Gadgets: {displayedGadgets.length}</h3> */}

      <div className='grid grid-cols-1 md:grid-cols-4 gap-5 mx-5 md:mx-20'>
        <div className='col-span-1'>
          <div className='bg-white shadow-2xl rounded-lg p-2 ml-10 md:block'>
          <DevicesCategory 
            categories={categories} 
            onSelectCategory={handleSelectCategory} 
            selectedCategory={selectedCategory}  
          ></DevicesCategory>
          </div>
        </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4'>
            {
            displayedGadgets.map(gadget => (
              <Device key={gadget.product_id} gadget={gadget} ></Device>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;