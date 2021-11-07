/** @format */

import { INCREASE, DECREASE } from '../types';

const increase = () => {
  return {
    type: INCREASE,
  };
};

const decrease = () => {
  return {
    type: DECREASE,
  };
};

export {increase, decrease}