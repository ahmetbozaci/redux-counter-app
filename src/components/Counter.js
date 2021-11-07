/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

const Counter = () => {
  const { counter, list } = useSelector((state) => state);
  console.log(list);
  return (
    <div>
      <h1>{counter}</h1>
      <ul>
        {list.map((item) => (
          <li key={uuidv4()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Counter;
