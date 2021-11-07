/** @format */

import { LIST_ADD } from '../types';

const defaultState = [];

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case LIST_ADD:
      return [...state, action.payload];
    default:
      return state;
  }
};
export default reducer;
