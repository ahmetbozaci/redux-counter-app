export const LIST_ADD = 'counter/list/LIST_ADD';

const defaultState = [];

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case LIST_ADD:
      return [...state, action.payload];
    default:
      return state;
  }
};


export const add = (number) => {
  return {
    type: LIST_ADD,
    payload: number,
  };
};

