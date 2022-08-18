import React from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f6f2;
  border: 1.1px solid #000000;
  width: 339px;
  height: 198px;
  margin: 2px 2px 2px 2px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexdirection ? props.flexdirection : 'row'};
  margin: ${(props) => (props.margin ? props.margin : 'none')};
`;
const Box = styled.div`
  width: 29px;
  height: 29px;
  padding-top: 2px;
  margin: 10px 10px 10px 295px;
  background-color: #f3c93f;
  border: 1.2px solid #000000;
  text-align: center;
  cursor: pointer;

  :hover {
    background-color: #00000084;
  }
`;

const Profile = styled.div`
  width: 61px;
  height: 61px;
  border-radius: 30px;
  background-color: #f2c93f;
  border: 1.1px solid #000000;
  margin: 20px 0px 0px 71.5px;
`;

const TextBox = styled.div`
  width: ${(props) => (props.width ? props.width : '56px')};
  height: ${(props) => (props.height ? props.height : '26px')};
  margin-bottom: 5px;
  background-color: transparent;
  text-align: center;
  padding-top: 3px;
`;
const MyProfilePopUp = () => {
  return (
    <>
      <Container>
        <Box>
          <VscClose size="23px" />
        </Box>
        <Wrapper>
          <Profile />
          <Wrapper flexdirection="column" margin="25px 0px 0px 40px">
            <TextBox>
              <p>김소정</p>
            </TextBox>
            <TextBox width="68px" height="17px">
              <p>@sojung.jpg</p>
            </TextBox>
          </Wrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default MyProfilePopUp;
