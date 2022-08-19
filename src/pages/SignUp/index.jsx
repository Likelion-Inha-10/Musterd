import React, { useState, useEffect } from 'react';
import {
  TextBox,
  TextKorean,
  Button,
  LoginWrapper,
  Input,
  TitleWrapper,
} from '../../musterd-ui/LoginSignupStyled';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Modal from '../../musterd-ui/Modal';
import Alert from './component/Alert';

const WarningWrapper = styled.div`
  width: 14.5em;
  text-align: left;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const SignUp = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    checkPassword: '',
    name: '',
    univ: '',
  });
  const { email, password, checkPassword, name, univ } = inputs; //비구조화 할당을 통해 값 추출
  const [warningName, setWarningName] = useState(
    '※ 이름은 영문 또는 한글로 입력해주세요.'
  );
  const [warningEmail, setWarningEmail] = useState('');
  const [warningPW, setWarningPW] = useState('');
  const [warningCheckPW, setWarningCheckPW] = useState('');
  const [isPopup, setIsPopup] = useState(false);

  const onChange = (e) => {
    const { value, name } = e.target; //e.target에서 name과 value를 추출
    setInputs({
      ...inputs, //기존의 input 객체를 복사한 뒤
      [name]: value, //name 키를 가진 값을 value로 설정
    });
    console.log(e.target.value);

    //이름 형식 체크
    if (name === 'name') {
      const regexName = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|\s]*$/;
      if (regexName.test(e.target.value) && e.target.value.length > 0)
        setWarningName('');
      else setWarningName('※ 이름은 영문 또는 한글로 입력해주세요.');
    }

    //이메일 형식 체크
    if (name === 'email') {
      const regexEmail =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (regexEmail.test(e.target.value) || e.target.value.length === 0)
        setWarningEmail('');
      else setWarningEmail('※ 이메일 형식이 올바르지 않습니다.');
    }
  };

  //비밀번호 체크
  //useState만 이용하면 비동기화 문제가 생겨 최신 상태가 바로 반영되지 않기 때문에 useEffect 이용
  useEffect(() => {
    if (password.length < 6) {
      setWarningPW('※ 비밀번호는 6자리 이상이어야 합니다.');
    } else if (password.length >= 6) {
      setWarningPW('');
    }
    if (password !== checkPassword) {
      setWarningCheckPW('※ 비밀번호와 일치하지 않습니다.');
    } else if (password === checkPassword) {
      setWarningCheckPW('');
    }
  }, [password, checkPassword]);

  const navigate = useNavigate();
  //회원가입 버튼 눌렀을 때
  const onSubmit = () => {
    if (
      email &&
      warningEmail === '' &&
      password.length >= 6 &&
      password === checkPassword &&
      warningName === '' &&
      univ
    ) {
      axios
        .post(`http://139.162.67.184:8000/account/signup`, {
          email: email,
          password: password,
          username: name,
          univ: univ,
        })
        .then((response) => {
          console.log(response);
          //alert('회원가입이 완료 되었습니다.');
          setIsPopup(!isPopup);
          //navigate('/login');
        })
        .catch((error) => {
          Alert('이미 가입되어 있는 계정입니다.');
          console.log(error);
        });
    }
  };

  const toLogin = () => {
    navigate(`/login`);
  };

  return (
    <>
      <style>{'body { background-color: #F7F6F2; }'}</style>
      {isPopup ? (
        <Modal
          completeModal={isPopup}
          setCompleteModal={setIsPopup}
          content="축하합니다! "
          subcontent="가입이 완료되셨습니다!"
          type="completePopUp"
        />
      ) : (
        <></>
      )}
      <LoginWrapper width="100%">
        <TitleWrapper marginBottom="2em">
          <TextBox
            fontSize="35px"
            cursor="default"
            color="black"
            fontWeight="bold"
          >
            Musterd
          </TextBox>
          <TextBox
            fontSize="15px"
            cursor="default"
            color="black"
            fontWeight="bold"
          >
            : Make our plan
          </TextBox>
        </TitleWrapper>
        <Input
          name="name"
          type="text"
          placeholder="Name *"
          border="1px solid black"
          width="17em"
          height="35px"
          fontSize="13.5px"
          margin="20px 5px 0px 5px"
          onChange={onChange}
        />
        <br />
        <WarningWrapper>
          <TextKorean
            color="#707070"
            padding="2px 13px 0 0"
            fontWeight="semi-bold"
          >
            {warningName}
          </TextKorean>
        </WarningWrapper>

        <Input
          name="univ"
          type="text"
          placeholder="University *"
          border="1px solid black"
          width="17em"
          height="35px"
          fontSize="13.5px"
          margin="25px 0 0 0"
          onChange={onChange}
        />
        <br />
        <Input
          name="email"
          type="email"
          placeholder="e-mail *"
          border="1px solid black"
          width="17em"
          height="35px"
          fontSize="13.5px"
          margin="25px 0 0 0"
          onChange={onChange}
        />
        <br />
        <WarningWrapper>
          <TextKorean
            color="#707070"
            padding="2px 35px 0 0"
            cursor="default"
            fontWeight="semi-bold"
          >
            {warningEmail}
          </TextKorean>
        </WarningWrapper>

        <Input
          name="password"
          type="password"
          placeholder="Password *"
          border="1px solid black"
          width="17em"
          height="35px"
          fontSize="13.5px"
          margin="25px 0 0 0"
          onChange={onChange}
        />
        <br />
        <WarningWrapper>
          <TextKorean
            color="#707070"
            padding="2px 20px 0 0"
            cursor="default"
            fontWeight="semi-bold"
          >
            {warningPW}
          </TextKorean>
        </WarningWrapper>
        <Input
          name="checkPassword"
          type="password"
          placeholder="Check Password *"
          border="1px solid black"
          width="17em"
          height="35px"
          fontSize="13.5px"
          margin="25px 0 0 0"
          onChange={onChange}
        />
        <br />
        <WarningWrapper>
          <TextKorean
            color="#707070"
            padding="2px 50px 0 0"
            cursor="default"
            fontWeight="semi-bold"
          >
            {warningCheckPW}
          </TextKorean>
        </WarningWrapper>
        <Button
          backgroundColor={
            email &&
            warningEmail === '' &&
            password.length >= 6 &&
            checkPassword === password &&
            warningName === '' &&
            univ
              ? '#F3C93F'
              : 'lightgray'
          }
          width="200px"
          height="30px"
          fontSize="14px"
          margin="3.3em 0 2em 0"
          borderRadius="0"
          border="1px solid black"
          cursor={
            email &&
            warningEmail === '' &&
            password.length >= 6 &&
            checkPassword === password &&
            warningName === '' &&
            univ
              ? 'pointer'
              : 'default'
          }
          onClick={onSubmit}
        >
          Sign Up
        </Button>
        <br />
        <TextBox
          fontSize="13px"
          color="#7C7C7C"
          display="inline"
          cursor="default"
          padding="0 13px 0 0"
        >
          Do you have an account already ?
        </TextBox>
        <TextBox
          fontSize="14px"
          display="inline"
          cursor="pointer"
          onClick={toLogin}
        >
          Login
        </TextBox>
      </LoginWrapper>
    </>
  );
};

export default SignUp;
