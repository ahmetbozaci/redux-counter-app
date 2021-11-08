/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../redux/counter'
import { add } from '../redux/list';

const Buttons = () => {
  const dispatch = useDispatch();
  const {counter} = useSelector((state) => state);
  return (
    <div>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
      <button onClick={() => dispatch(add(counter))}>ADD</button>
    </div>
  );
};

export default Buttons;
