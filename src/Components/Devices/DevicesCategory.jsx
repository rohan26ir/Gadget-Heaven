import React from 'react';

const DevicesCategory = ({ categories,selectedCategory, onSelectCategory}) => {
  return (
    <div>
      {
      categories.map((category, index) => (
        <div 
          key={index} 
          onClick={() => onSelectCategory(category)} 
          className={`rounded-3xl my-2 px-4 py-2 cursor-pointer 
                      ${selectedCategory === category ? 'bg-[#8B35D3] text-white font-bold' : 'bg-gray-200 text-black'}`}>
          {category}
        </div>
      ))}
    </div>
  );
};

export default DevicesCategory;
