import React, { useState } from 'react';

const UseStateBasics = () => {
  const [num, setNum] = useState(20);
  const clickHandle = () => {
    if (num === 20) {
      setNum(30);
    } else {
      setNum(20);
    };
  };
  return (
    <React.Fragment>
      <h1>{num}</h1>
      <button type='button' className='btn' onClick={clickHandle}>Change Number</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
