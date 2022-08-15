import React, { useEffect, useState } from 'react';
import FriendRanking from './Component/FriendRanking';
import NavigationBar from './../../musterd-ui/NavigationBar';

const Ranking = () => {
  const [ranking, setRanking] = useState([
    {
      name: '친구1',
      profile_image: '',
      point: 1255,
    },
    {
      name: '친구2',
      profile_image: '',
      point: 124,
    },
    {
      name: '친구3',
      profile_image: '',
      point: 12,
    },
    {
      name: '친구4',
      profile_image: '',
      point: 5,
    },
  ]);

  // api 통신할 부분
  //   useEffect(() => {
  //     friendRankApi.getFriendRanking().then((res) => {
  //       setRanking(res);
  //     });
  //   }, []);

  return (
    <div>
      {ranking.map((friendRaking, index) => (
        <FriendRanking
          rank={index + 1}
          image={friendRaking.image}
          name={friendRaking.name}
          point={friendRaking.point}
        />
      ))}
      <NavigationBar />
    </div>
  );
};

export default Ranking;
