import { FAILURE, LOGIN_USER, SUCCESS } from './types';
import { request } from './customAxios';
const USER_URL = '/account';

export function login(dataToSubmit) {
  try {
    const data = request('post', USER_URL + '/signin', dataToSubmit);
    console.log(data);
    return {
      type: LOGIN_USER,
      payload: data,
    };
  } catch {
    return {
      type: FAILURE,
    };
  }
}
