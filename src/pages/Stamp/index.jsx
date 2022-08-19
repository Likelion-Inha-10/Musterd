import React from 'react';
import NavigationBar from '../../musterd-ui/NavigationBar';
import Explain from './Component/StampExplain';
import StampList from './Component/StampList';
import styled from 'styled-components';
import Header from '../../musterd-ui/Header';

const Text = styled.div`
  display: flex;
  font-size: 30px;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
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
      <Header src="/stamp" back />

      <Text>Travel Stamp</Text>
      <Underline />
      <StampList />
      <Explain />

      <NavigationBar pageNumber="3" />
    </div>
  );
};
export default Stamp;
