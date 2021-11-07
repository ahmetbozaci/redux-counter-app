/** @format */

import { LIST_ADD } from '../types';

const add = (number) => {
  return {
    type: LIST_ADD,
    payload: number,
  };
};

export { add };
