import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: yellowgreen;
`;

const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const FriendRanking = (props) => {
  return (
    <Wrapper>
      순위: {props.rank}
      <Image src={props.image} />
      name: {props.name}, point: {props.point}
    </Wrapper>
  );
};

export default FriendRanking;
