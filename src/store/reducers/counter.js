import { INCREASE, DECREASE } from "../types";
const defaultState = 0;

const reducer = (state=defaultState, action) => {
  switch(action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state
  }
}

export default reducer;