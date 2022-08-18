import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FriendRanking from './Component/FriendRanking';
import NavigationBar from './../../musterd-ui/NavigationBar';
import Header from '../../musterd-ui/Header';
import RankInfo from './Component/RankInfo';
import AddPopUp from '../../musterd-ui/AddPopUp';
import { useNavigate } from 'react-router-dom';

const RankingWrapper = styled.div`
  height: ${(props) => (props.height ? props.height : '100%')};
  padding: 30px 20px;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Typography = styled.p`
  font-size: 15px;
`;

const Margin = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  height: 50px;
  background-color: #f2c93f;
  box-shadow: 0px 4px 4px 0 rgb(0, 0, 0, 0.1);
  :hover {
    cursor: pointer;
    background-color: rgba(242, 201, 63, 0.8);
  }
`;

const Ranking = () => {
  const navigate = useNavigate();
  const [ranking, setRanking] = useState([
    {
      name: '친구1',
      profile_image: '',
      user_id: 'sojung.jpg',
      point: 1255,
    },
    {
      name: '친구2',
      profile_image: '',
      user_id: 'sojung.jpg',
      point: 524,
    },
    {
      name: '친구3',
      profile_image: '',
      user_id: 'sojung.jpg',
      point: 342,
    },
    {
      name: '친구4',
      profile_image: '',
      user_id: 'sojung.jpg',
      point: 200,
    },
    {
      name: '친구5',
      profile_image: '',
      user_id: 'sojung.jpg',
      point: 130,
    },
    {
      name: '친구6',
      profile_image: '',
      user_id: 'sojung.jpg',
      point: 50,
    },
  ]);

  // api 통신할 부분
  // useEffect(() => {
  //   axios.get(
  //     `${apiUrl}/rank`.then((res) => {
  //       setRanking(res.data);
  //     })
  //   );
  // }, []);

  const onBtnClick = () => {
    navigate('/search');
  };

  return (
    <div>
      <Header back />
      <RankInfo />

      {/* 친구랭킹이 없을 때 */}
      {ranking.length === 0 && (
        <RankingWrapper direction="column" height="600px">
          <Typography>아직 친구가 없습니다.</Typography>
          <Margin height="10px" />
          <Typography>친구의 플랜에 참여해보세요!</Typography>
          <Margin height="20px" />
          <StyledButton onClick={onBtnClick}>가보자고~~</StyledButton>
        </RankingWrapper>
      )}

      {/* 친구랭킹이 있을 때 */}
      <RankingWrapper>
        {ranking.map((friendRaking, index) => (
          <FriendRanking
            rank={index + 1}
            image={friendRaking.image}
            name={friendRaking.name}
            user_id={friendRaking.user_id}
            point={friendRaking.point}
          />
        ))}
      </RankingWrapper>
      <AddPopUp />
      <Margin height="40px" />
      <NavigationBar pageNumber="4" />
    </div>
  );
};

export default Ranking;
