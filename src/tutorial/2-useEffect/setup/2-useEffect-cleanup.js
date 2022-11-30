import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth)
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    console.log('useEffect');
    return () => {
      console.log("cleanup");
      window.removeEventListener('resize', checkSize);
    }
  });
  console.log('render');
  return (<>
    <h2>Window Size</h2>
    <h1>{size} Px</h1></>)
};

export default UseEffectCleanup;
