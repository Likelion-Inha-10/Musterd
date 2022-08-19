import { friendList } from './fakeResponse';
import axios from 'axios';

export const getFriendByName = async (friendName) => {
  let list = axios
    .post('/search/friend', {
      name: friendName,
    })
    .then((res) => {
      res.data.filter((friend) => friend.name.includes(friendName));
    });
};
