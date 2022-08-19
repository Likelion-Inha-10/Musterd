import React, { useEffect, useState } from 'react';
import {
  TextBox,
  TextKorean,
  Button,
  LoginWrapper,
  Input,
  TitleWrapper,
} from '../../musterd-ui/LoginSignupStyled';
import { useNavigate } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/actions';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

const InputWrapper = styled.div`
  margin: 0 10%;
  width: 80%;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
const FixInput = styled.div`
  text-align: left;
  float: left;
  padding-left: 33px;
  width: 80%;
`;
const ProfileImage = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || '15px'};
  background-size: ${(props) => props.backgroundSize};
  float: ${(props) => props.float || 'none'};
  position: absolute;
  cursor: ${(props) => props.cursor || 'default'};
`;

export const setCookies = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};
export const getCookie = (name) => {
  return cookies.get(name);
};

const Login = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPW, setUserPW] = useState('');
  const [warning, setWarning] = useState('');
  const [isEmail, setIsEmail] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.login);

  useEffect(() => {
    if (auth.auth_token !== '') {
      onLogin();
      navigate('/mypage');
    }
  }, [auth]);

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
  const onLogin = (e) => {
    if (isEmail && userPW.length >= 6) {
      let body = {
        email: userEmail,
        password: userPW,
      };
      e.preventDefault();
      dispatch(login(body));
      /*
        .catch((error) => {
          console.log(error);
          //alert('e-mail 혹은 비밀번호가 올바르지 않습니다.');
          setIsPopup(!isPopup);
          setWarning('※ e-mail 혹은 비밀번호가 올바르지 않습니다.');
        });
    }*/
    }
  };

  const toJoin = () => {
    navigate(`/signup`);
  };
  const ResetEmail = () => {
    setUserEmail('');
  };
  const ResetPassword = () => {
    setUserPW('');
  };

  const DeleteEmail = () => {
    if (!userEmail) {
      return '';
    } else {
      return (
        <Button
          border="1px solid black"
          borderRadius="50%"
          backgroundColor="#F3C93F"
          float="right"
          margin="0px 10px 0 0"
          onClick={ResetEmail}
        >
          <TextBox fontSize="12px" padding="3px 3px 0 3px" cursor="pointer">
            <VscChromeClose />
          </TextBox>
        </Button>
      );
    }
  };

  const DeletePW = () => {
    if (!userPW) {
      return '';
    } else {
      return (
        <Button
          border="1px solid black"
          borderRadius="50%"
          backgroundColor="#F3C93F"
          float="right"
          margin="0px 10px 0 0"
          onClick={ResetPassword}
        >
          <TextBox fontSize="12px" padding="3px 3px 0 3px" cursor="pointer">
            <VscChromeClose />
          </TextBox>
        </Button>
      );
    }
  };

  /*페이지가 긴 경우 네비게이션 바 사용하려면
  <LoginWrapper top="0" transform="translate(-50%, 0)" height="750px">
  이런 식으로 세로 중앙 배열 제거하고 높이 지정해주면 된다.*/
  return (
    <>
      <style>{'body { background-color: #F7F6F2; }'}</style>
      <LoginWrapper width="100%">
        <TitleWrapper marginBottom="5.5em">
          <TextBox
            fontSize="35px"
            cursor="default"
            color="black"
            fontWeight="bold"
          >
            LOGIN
          </TextBox>
        </TitleWrapper>
        <InputWrapper>
          <ProfileImage
            backgroundImage="person.png"
            width="20px"
            height="20px"
            backgroundSize="cover"
            margin="2px 15px 0px 10px"
          ></ProfileImage>
          <FixInput>
            <Input
              value={userEmail}
              name="userEmail"
              type="email"
              placeholder="e-mail"
              width="100%"
              height="25px"
              fontSize="15px"
              margin="0 10px 0 10px"
              border="none"
              letterSpacing="0.02em"
              backgroundColor="#F7F6F2"
              onChange={onChangeUserEmail}
            />
          </FixInput>
          <DeleteEmail />
          &nbsp;
        </InputWrapper>
        <br />
        <InputWrapper>
          <ProfileImage
            backgroundImage="key.png"
            width="27px"
            height="16px"
            margin="0 0 15px 10px"
            backgroundSize="cover"
          ></ProfileImage>
          <FixInput>
            <Input
              value={userPW}
              name="userPW"
              type="password"
              placeholder="password"
              width="100%"
              height="18px"
              fontSize="15px"
              margin="0 10px 0 10px"
              border="none"
              letterSpacing="0.07em"
              backgroundColor="#F7F6F2"
              onChange={onChangeUserPW}
            />
          </FixInput>
          <DeletePW />
          &nbsp;
        </InputWrapper>

        <TextKorean color="salmon" cursor="default" padding="20px 0 0 0">
          {warning}
        </TextKorean>
        <Button
          backgroundColor={
            isEmail && userPW.length >= 6 ? '#F3C93F' : 'lightgray'
          }
          width="200px"
          height="30px"
          fontSize="14px"
          margin="3em 0 5.5em 0"
          cursor={isEmail && userPW.length >= 6 ? 'pointer' : 'default'}
          onClick={onLogin}
          borderRadius="0"
          border="1px solid black"
        >
          Login
        </Button>
        <br />
        <TextKorean
          color="#7C7C7C"
          fontSize="13px"
          display="inline"
          fontWeight="500"
          padding="0 15px"
        >
          Don't you have an account ?
        </TextKorean>
        <TextKorean
          fontSize="14px"
          cursor="pointer"
          display="inline"
          onClick={toJoin}
        >
          Sign Up
        </TextKorean>
      </LoginWrapper>
    </>
  );
};

export default Login;