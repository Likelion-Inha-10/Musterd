import axios from 'axios';

const DOMAIN = 'http://139.162.67.184:8000';
axios.defaults.withCredentials = true;
export const request = (method, url, data) => {
  return axios({
    method,
    url: url,
    data,
    withCredentials: true,
  })
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(err));
};
