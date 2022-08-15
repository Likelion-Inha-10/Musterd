import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 300px;
  height: 150px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const TextBox = styled.div`
  font-size: 15px;
  color: white;
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

const Button = styled.div`
  background-color: navy;
  color: yellow;
  border-radius: 16px;
  width: 100px;
  height: 30px;
  margin: 30px 100px 0px 100px;
  padding-top: 3px;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  font-weight: 300;

  :hover {
    background-color: grey;
  }
`;
//회원가입->로그인으로 갈때
const CompletePopUp = (props) => {
  const navigate = useNavigate();
  const onButtonClick1 = () => {
    navigate('/login');
  };
  const onButtonClick2 = () => {
    navigate('/');
  };
  return (
    <>
      <Container>
        <TextBox>{props.content}</TextBox>
        {props.isSignIn ? (
          <Button onClick={onButtonClick1}>확인 </Button>
        ) : (
          <Button onClick={onButtonClick2}>확인</Button>
        )}
      </Container>
    </>
  );
};

export default CompletePopUp;
