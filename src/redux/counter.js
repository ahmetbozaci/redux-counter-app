/** @format */

export const INCREASE = 'redux-counter/counter/increase';
export const DECREASE = 'redux-counter/counter/decrease';


const defaultState = 0;

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}

export const increase = () => {
  return {
    type: INCREASE,
  };
};

export const decrease = () => {
  return {
    type: DECREASE,
  };
};
