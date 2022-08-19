import { categoryPlans } from './fakeResponse';
import axios from 'axios';

export const getCategoryPlan = async () => {
  return axios.get('/search/category').then((res) => {
    console.log(res.data);
    return res.data;
  });
};
