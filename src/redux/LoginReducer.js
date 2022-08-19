import { combineReducers } from 'redux';
import { FAILURE, LOGIN_USER, SUCCESS } from './types';
import axios from 'axios';
import { setCookies } from '../pages/Login';

const initialState = {
  id: 0,
  name: '',
  profile_image: '',
  auth_token: '',
  isLogin: 'not',
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER_FULFILLED':
      console.log(action.payload.auth_token);
      setCookies('token', action.payload.auth_token);
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${action.payload.auth_token}`;
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        auth_token: action.payload.auth_token,
        profile_image: action.payload.profile_image,
        isLogin: 'yes',
      };
    case FAILURE:
      if (state.step > 0) {
        return { ...state, step: state.step - 1 };
      } else return state;
    default:
      return {
        ...state,
        isLogin: 'fail',
      };
  }
};

const loginReducer = combineReducers({ login });
export default loginReducer;
