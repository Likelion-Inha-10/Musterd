import { friendList } from "./fakeResponse";

export const getFriendByName = async (friendName) => {
  let list = friendList.filter((friend) => friend.name.includes(friendName));
  console.log(list);
  if (list === undefined) {
    return friendList;
  } else {
    return list;
  }
};
