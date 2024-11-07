import React, { useEffect } from 'react';

const Statistics = () => {

  useEffect(() => {
    document.title = "Statistics | GadgetHeaven";
  },[])
  return (
    <div>
      <h2>this is Statistics page</h2>
    </div>
  );
};

export default Statistics;