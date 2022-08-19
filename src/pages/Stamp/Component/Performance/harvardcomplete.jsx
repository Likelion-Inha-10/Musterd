import React from 'react';
import styled from 'styled-components';
import Header from '../../../../musterd-ui/Header';
import NavigationBar from '../../../../musterd-ui/NavigationBar';

const Box = styled.div`
  width: 100vw;
  height: 750px;
  background-color: #e3bdb7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LikeLionText = styled.div`
  color: #c91414;
  font-size: 30px;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
  -webkit-text-stroke: 1.5px black;
`;

const Text = styled.div`
  display: flex;
  font-size: 17px;
  font-family: 'Noto Sans KR', 200;
  justify-content: center;
  margin-top: ${(props) => props.marginTop || '10px'};
  margin-bottom: 10px;
  text-align: center;
  line-height: 30px;
`;

const Harvardcomplete = () => {
  return (
    <div>
      <Header back />
      <Box>
        <LikeLionText>HARVARD UNIV</LikeLionText>
        <Text>서비스 준비중입니다!</Text>
      </Box>
      <NavigationBar pageNumber="3" />
    </div>
  );
};

export default Harvardcomplete;
