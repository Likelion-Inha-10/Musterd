import { applyMiddleware, createStore } from 'redux';
import loginReducer from './LoginReducer';
import promiseMiddlerware from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const store = createStore(
  loginReducer,
  applyMiddleware(promiseMiddlerware, thunk)
);
export default store;
