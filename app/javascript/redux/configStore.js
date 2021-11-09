import { createStore, combineReducers, applyMiddleware } from 'react-redux';
import thunk from 'redux-thunk';
import greetingReducer from './greeting/greetingReducer';

const rootReducer = combineReducers(
  {
    greeting: greetingReducer,
  }
);

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;