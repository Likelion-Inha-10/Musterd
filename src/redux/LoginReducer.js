import { combineReducers } from 'redux';
import { FAILURE, LOGIN_USER, SUCCESS } from './types';

const initialState = {};

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case FAILURE:
      if (state.step > 0) {
        return { ...state, step: state.step - 1 };
      } else return state;
    default:
      return state;
  }
};

const loginReducer = combineReducers({ login });
export default loginReducer;
