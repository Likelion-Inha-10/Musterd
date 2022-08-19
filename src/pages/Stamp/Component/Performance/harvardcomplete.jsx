import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100vw;
  height: 654px;
  background-color: #e3bdb7;
  border: 1.1px solid #000000;
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LikeLionText = styled.div`
  color: #c91414;
  font-size: 30px;
  font-family: 'Roboto Slab', 800;
  text-shadow: 0px 0px 1px black;
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
      <Box>
        <LikeLionText>HARVARD UNIV</LikeLionText>
        <Text>서비스 준비중입니다!</Text>
      </Box>
    </div>
  );
};

export default Harvardcomplete;
