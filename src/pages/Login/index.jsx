import React, { useState } from 'react';
import {
  TextBox,
  Button,
  LoginWrapper,
  Input,
} from '../../musterd-ui/LoginSignupStyled';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from '../../musterd-ui/Modal';

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPW, setUserPW] = useState('');
  const [warning, setWarning] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const [isPopup, setIsPopup] = useState(false);

  const onChangeUserEmail = (e) => {
    //console.log(e.target.value);
    setUserEmail(e.target.value);

    //이메일 형식 체크
    const regexEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regexEmail.test(e.target.value)) setIsEmail(true);
    else setIsEmail(false);
  };
  const onChangeUserPW = (e) => {
    //console.log(e.target.value);
    setUserPW(e.target.value);
  };

  const navigate = useNavigate();
  //로그인 버튼 눌렀을 때
  const onLogin = () => {
    if (isEmail && userPW.length >= 6) {
      // axios
      //   .post(`api주소`, { userEmail, userPW })
      //   .then((response) => {
      //     console.log(response);
      //     navigate(`/`);
      //     //navigate(`/${response.data.id}`);
      setIsPopup(!isPopup);
      // })
      // .catch((error) => {
      //   console.log(error);
      //   alert('e-mail 혹은 비밀번호가 올바르지 않습니다.');
      //   setWarning('※ e-mail 혹은 비밀번호가 올바르지 않습니다.');
      // });
    }
  };

  const toJoin = () => {
    navigate(`/signup`);
  };

  /*페이지가 긴 경우 네비게이션 바 사용하려면
  <LoginWrapper top="0" transform="translate(-50%, 0)" height="750px">
  이런 식으로 세로 중앙 배열 제거하고 높이 지정해주면 된다.*/
  return (
    <>
      {isPopup ? (
        <Modal
          completeModal={isPopup}
          setCompleteModal={setIsPopup}
          content="로그인이 완료되었습니다!"
          subcontent="MyPage로 넘어갑니다"
          type="completePopUp"
          isSignIn="true"
        />
      ) : (
        <></>
      )}
      <style>{'body { background-color: #0404b4; }'}</style>
      <LoginWrapper>
        <TextBox
          fontSize="50px"
          fontWeight="lighter"
          cursor="default"
          color="#FACC2E"
          padding="0 0 10px 0"
        >
          Musterd
        </TextBox>
        <TextBox color="salmon" cursor="default">
          {warning}
        </TextBox>
        <Input
          name="userEmail"
          type="email"
          placeholder="e-mail"
          width="200px"
          height="30px"
          fontSize="15px"
          margin="10px 5px 5px 5px"
          border="3px solid #facc2e"
          letterSpacing="0.07em"
          onChange={onChangeUserEmail}
        />
        <br />
        <Input
          name="userPW"
          type="password"
          placeholder="password"
          width="200px"
          height="30px"
          fontSize="15px"
          margin="5px"
          border="3px solid #facc2e"
          letterSpacing="0.07em"
          onChange={onChangeUserPW}
        />
        <br />
        <Button
          backgroundColor={
            isEmail && userPW.length >= 6 ? '#FACC2E' : 'lightgray'
          }
          width="200px"
          height="30px"
          fontSize="14px"
          margin="20px"
          cursor={isEmail && userPW.length >= 6 ? 'pointer' : 'default'}
          onClick={onLogin}
        >
          로그인
        </Button>
        <br />
        <TextBox
          fontSize="11px"
          color="#FACC2E"
          cursor="pointer"
          display="inline"
          onClick={toJoin}
        >
          회원가입하러 가기
        </TextBox>
      </LoginWrapper>
    </>
  );
};

export default Login;
