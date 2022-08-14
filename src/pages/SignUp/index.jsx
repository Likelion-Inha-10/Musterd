import React, { useState, useEffect } from 'react';
import {
  TextBox,
  Button,
  LoginWrapper,
  Input,
} from '../../musterd-ui/LoginSignupStyled';
import { useNavigate } from 'react-router-dom';
//import styled from "styled-components";
import axios from 'axios';

/*const IDwarning = styled.div`
  width: 200px;
  text-align: left;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;*/

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
  const onSubmit = (e) => {
    if (
      email &&
      warningEmail === '' &&
      password.length >= 6 &&
      password === checkPassword &&
      warningName === '' &&
      univ === ''
    ) {
      axios
        .post(`api주소`, { email, password, checkPassword, name })
        .then(() => {
          //console.log(response);
          alert('회원가입이 완료 되었습니다.');
          navigate('/login');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const toLogin = () => {
    navigate(`/login`);
  };

  return (
    <>
      <style>{'body { background-color: #0404b4;}'}</style>
      <LoginWrapper width="90%">
        <TextBox
          fontSize="50px"
          fontWeight="lighter"
          cursor="default"
          color="#FACC2E"
        >
          SignUp
        </TextBox>
        <Input
          name="name"
          type="text"
          placeholder="이름 *"
          width="200px"
          height="30px"
          fontSize="13.5px"
          margin="20px 5px 0px 5px"
          onChange={onChange}
        />
        <br />
        <TextBox color="#fefefe" padding="2px 13px 0 0">
          {warningName}
        </TextBox>
        <Input
          name="univ"
          type="text"
          placeholder="학교 *"
          width="200px"
          height="30px"
          fontSize="13.5px"
          margin="10px 5px 0px 5px"
          onChange={onChange}
        />
        <br />
        <Input
          name="email"
          type="email"
          placeholder="e-mail *"
          width="200px"
          height="30px"
          fontSize="13.5px"
          margin="10px 5px 0px 5px"
          onChange={onChange}
        />
        <br />

        <TextBox color="#fefefe" padding="2px 35px 0 0" cursor="default">
          {warningEmail}
        </TextBox>

        <Input
          name="password"
          type="password"
          placeholder="비밀번호 *"
          width="200px"
          height="30px"
          fontSize="13.5px"
          margin="10px 5px 0px 5px"
          onChange={onChange}
        />
        <br />
        <TextBox color="#fefefe" padding="2px 20px 0 0" cursor="default">
          {warningPW}
        </TextBox>
        <Input
          name="checkPassword"
          type="password"
          placeholder="비밀번호 확인 *"
          width="200px"
          height="30px"
          fontSize="13.5px"
          margin="10px 5px 0px 5px"
          onChange={onChange}
        />
        <br />
        <TextBox color="#fefefe" padding="2px 50px 0 0" cursor="default">
          {warningCheckPW}
        </TextBox>
        <Button
          backgroundColor={
            email &&
            warningEmail === '' &&
            password.length >= 6 &&
            checkPassword === password &&
            warningName === '' &&
            univ
              ? '#FACC2E'
              : 'lightgray'
          }
          width="200px"
          height="30px"
          fontSize="14px"
          margin="20px"
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
          회원가입
        </Button>
        <br />
        <TextBox
          fontSize="13px"
          color="white"
          display="inline"
          cursor="default"
          padding="0 20px 0 0"
        >
          이미 계정이 있습니까?
        </TextBox>
        <TextBox
          fontSize="13px"
          display="inline"
          cursor="pointer"
          color="#FACC2E"
          onClick={toLogin}
        >
          로그인
        </TextBox>
      </LoginWrapper>
    </>
  );
};

export default SignUp;
