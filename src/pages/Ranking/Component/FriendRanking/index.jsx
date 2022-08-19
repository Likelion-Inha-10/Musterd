import React from 'react';
import styled from 'styled-components';
import hand from '../../../../assets/image/hand.svg';

const TopThreeContainer = styled.div`
  width: ${(props) => props.width};
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
  top: ${(props) => props.topPosition};
  left: ${(props) => props.leftPosition};
  padding-bottom: 30px;
`;

const Margin = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
`;

const RankingContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const Typography = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '15px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'regular')};
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
  line-height: 1.2;
`;

const Profile = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  border: 1px solid black;
`;

const PointWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50px;
  height: 18px;
`;

const FriendRanking = (props) => {
  const displayRanking = (rank, image, name, user_id, point) => {
    switch (rank) {
      case 1:
        return (
          <TopThreeContainer width="90px" leftPosition="75px">
            <Typography fontWeight="bold">{rank}</Typography>
            <Profile width="90px" height="90px" src={image} />
            <Typography fontWeight="bold">{name}</Typography>
            <Typography fontColor="#4B4B4B">@{user_id}</Typography>
            <PointWrapper>
              <img src={hand}></img>
              <Typography fontSize="13px">{point}</Typography>
            </PointWrapper>
            <Margin height="20px" />
          </TopThreeContainer>
        );
      case 2:
        return (
          <TopThreeContainer width="70px" leftPosition="-100px">
            <Margin height="20px" />
            <Typography fontWeight="bold">{rank}</Typography>
            <Profile width="70px" height="70px" src={image} />
            <Typography fontWeight="bold">{name}</Typography>
            <Typography fontColor="#4B4B4B">@{user_id}</Typography>
            <PointWrapper>
              <img src={hand}></img>
              <Typography fontSize="13px">{point}</Typography>
            </PointWrapper>
          </TopThreeContainer>
        );

      case 3:
        return (
          <TopThreeContainer width="70px" leftPosition="20px">
            <Margin height="20px" />
            <Typography fontWeight="bold">{rank}</Typography>
            <Profile width="70px" height="70px" src={image} />
            <Typography fontWeight="bold">{name}</Typography>
            <Typography fontColor="#4B4B4B">@{user_id}</Typography>
            <PointWrapper>
              <img src={hand}></img>
              <Typography fontSize="13px">{point}</Typography>
            </PointWrapper>
          </TopThreeContainer>
        );

      default:
        return (
          <>
            <RankingContainer width="90%" height="80px">
              <Typography fontWeight="bold">{rank}</Typography>
              <Profile width="36px" height="36px" src={image} />
              <UserInfo>
                <Typography fontWeight="bold">{name}</Typography>
                <Typography fontColor="#4B4B4B">@{user_id}</Typography>
              </UserInfo>
              <PointWrapper>
                <img src={hand}></img>
                <Typography fontSize="13px">{point}</Typography>
              </PointWrapper>
            </RankingContainer>
          </>
        );
    }
  };

  return displayRanking(
    props.rank,
    props.image,
    props.name,
    props.user_id,
    props.point
  );
};

export default FriendRanking;
