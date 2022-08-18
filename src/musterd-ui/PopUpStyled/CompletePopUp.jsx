import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f6f2;
  border: 1.1px solid #000000;
  width: 220px;
  height: 130px;
  margin: 2px 2px 2px 2px;
`;

const TextBox = styled.div`
  font-size: 15px;
  color: black;
  font-weight: bold;
  text-align: center;
  margin-top: ${(props) => (props.margintop ? props.margintop : '10px')};
`;

const Button = styled.div`
  width: 180px;
  height: 20px;
  border: 1.1px solid #000000;
  background-color: #f3c93f;
  text-align: center;
  font-size: 12px;
  padding-top: 2px;
  margin: 25px 0px 0px 15px;
  cursor: pointer;

  :hover {
    background-color: #00000084;
  }
`;
//회원가입->로그인으로 갈때
const CompletePopUp = (props) => {
  const navigate = useNavigate();
  const onButtonClick1 = () => {
    navigate('/mypage');
  };
  const onButtonClick2 = () => {
    navigate('/login');
  };
  return (
    <>
      <Container>
        <TextBox margintop="30px">{props.content}</TextBox>
        <TextBox>{props.subcontent}</TextBox>
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
