import { friendList } from "./fakeResponse";

export const getFriendByName = async (friendName) => {
  let list = friendList.filter((friend) => friend.name.includes(friendName));
  if (list.length === 0) {
    return friendList;
  } else {
    return list;
  }
};
