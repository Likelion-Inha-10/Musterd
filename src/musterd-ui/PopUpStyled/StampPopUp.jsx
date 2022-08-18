import React from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f6f2;
  border: 1.1px solid #000000;
  width: 70%;
  height: 296px;
  margin: 2px 2px 2px 2px;
`;

const Box = styled.div`
  width: ${(props) => (props.width ? props.width : '29px')};
  height: ${(props) => (props.height ? props.height : '29px')};
  background-color: #f3c93f;
  border: 1.1px solid #000000;
  margin: ${(props) => (props.margin ? props.margin : 'none')};
  text-align: center;
  padding-top: ${(props) => (props.paddingtop ? props.paddingtop : 'none')};
  cursor: pointer;

  :hover {
    background-color: #00000084;
  }
`;
const StampPopUp = () => {
  return (
    <>
      <Container>
        <Box margin="20px 0px 0px 85%">
          <VscClose size="23px" />
        </Box>
      </Container>
    </>
  );
};

export default StampPopUp;
