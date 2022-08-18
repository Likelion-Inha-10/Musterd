import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';

//헤더 컴포넌트 사용법
//뒤로가기 필요한 페이지: <Header src="" />
//뒤로가기 필요 없는 페이지: <Header back src="" />

const StyledHeader = styled.div`
  margin-top: 45px; //상태바를 위한 공간
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: solid 1px black;
  padding: 25px;
`;

const BackWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Typography = styled.h1`
  padding-left: 10px;
  font-size: 15px;
  font-weight: bold;
`;

const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: ${(props) => (props.src ? props.src : '#f2c93f')};
  border: 1px solid #000000;
`;

const Header = (props) => {
  const navigate = useNavigate();
  const onBackClick = () => {
    navigate(-1);
  };

  return (
    <StyledHeader>
      {props.back ? (
        <BackWrapper>
          <MdKeyboardArrowLeft onClick={onBackClick} size="20" />{' '}
          <Typography>Musterd</Typography>
        </BackWrapper>
      ) : (
        <BackWrapper>
          <Typography>Musterd</Typography>
        </BackWrapper>
      )}

      <ProfileIcon src={props.src} />
    </StyledHeader>
  );
};

export default Header;
