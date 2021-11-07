import {createStore, combineReducers} from 'redux';
import counterReducer from './reducers/counter';
import listReducer from './reducers/list';

const reducers = combineReducers({
  counter: counterReducer,
  list: listReducer
})

const store = createStore(reducers)

export default store;