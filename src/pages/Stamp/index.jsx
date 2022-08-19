import React from 'react';
import NavigationBar from '../../musterd-ui/NavigationBar';
import Explain from './Component/StampExplain';
import StampList from './Component/StampList';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 200vw;
  background-color: #f7f6f2;
`;

const Text = styled.div`
  display: flex;
  font-size: 30px;
  font-family: 'Roboto Slab', 800;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
`;

const Underline = styled.hr`
  width: 100vw;
  margin-top: 5px;
  border: 1px solid #000000;
`;

const Stamp = () => {
  return (
    <div>
      <Container>
        <Underline />
        <Text>Travel Stamp</Text>
        <Underline />
        <StampList />
        <Explain />
      </Container>
      <NavigationBar />
    </div>
  );
};
export default Stamp;
