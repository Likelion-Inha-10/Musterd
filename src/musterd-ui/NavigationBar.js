import React from 'react';
import { IoIosAirplane, IoIosSearch } from 'react-icons/io';
import { RiVipCrown2Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { TextBox } from './LoginSignupStyled';

const BarWrapping = styled.div`
  width: 100%;
  min-width: 320px;
  max-width: 500px;
  position: fixed;
  bottom: 0;
  height: 35px;
  padding-top: 5px;
  display: flex;
  justify-content: space-evenly;
  background-color: #f5f5f5;
`;

//페이지 이동은 임의로 작성해둠
//추후 다른 페이지 완성되면 수정 예정
const NavigationBar = () => {
  const navigate = useNavigate();
  const toStamp = () => {
    navigate(`/stamp`);
  };
  const toMypage = () => {
    navigate(`/mypage`);
  };
  const toSearch = () => {
    navigate(`/search`);
  };
  const toRanking = () => {
    navigate(`/ranking`);
  };

  //페이지가 길어질 때 페이지 내용이 네비게이션 바에 가려지는 문제 발생
  // -> 해결법 '../pages/Login'에 작성해둠
  return (
    <>
      <BarWrapping>
        <IoIosAirplane cursor="pointer" fontSize="30px" onClick={toStamp} />
        <TextBox
          cursor="pointer"
          fontSize="23px"
          fontWeight="700"
          onClick={toMypage}
        >
          MY
        </TextBox>
        <IoIosSearch cursor="pointer" fontSize="30px" onClick={toSearch} />
        <RiVipCrown2Fill cursor="pointer" fontSize="27px" onClick={toRanking} />
      </BarWrapping>
    </>
  );
};

export default NavigationBar;
