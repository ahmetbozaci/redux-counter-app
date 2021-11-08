import {createStore, combineReducers} from 'redux';
import counterReducer from './counter';
import listReducer from './list';

const reducers = combineReducers({
  counter: counterReducer,
  list: listReducer
})

const store = createStore(reducers)

export default store;