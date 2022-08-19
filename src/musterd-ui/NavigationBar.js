import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

//네비게이션 바 사용할 때
//마이페이지는 <NavigationBar pageNumber="1" /> 와 같이 pageNumber를 1로 넘겨주고
//검색페이지는 2로 넘겨주고
//트래블스템프 페이지는 3으로 넘겨주고
//랭킹페이지는 4로 넘겨준다.

const BarWrapping = styled.div`
  height: 8.5%;
  width: 100%;
  min-width: 320px;
  max-width: 500px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
`;
const NavigationButton = styled.div`
  font-family: 'Roboto Slab', serif;
  width: 25%;
  height: 100%;
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.backgroundColor || '#f7f6f2'};
  border-top: 1.5px solid #1d2053;
  border-bottom: none;
  border-right: ${(props) => props.borderRight || '1.5px solid #1D2053'};
  border-left: ${(props) => props.borderLeft || 'none'};
  cursor: pointer;
`;

const NavigationBar = (props) => {
  const [buttonState, setButtonState] = useState(props.pageNumber);

  const navigate = useNavigate();
  const toMypage = () => {
    navigate(`/mypage`);
  };
  const toSearch = () => {
    navigate(`/search`);
  };
  const toStamp = () => {
    navigate(`/stamp`);
  };
  const toRanking = () => {
    navigate(`/ranking`);
  };

  //페이지가 길어질 때 페이지 내용이 네비게이션 바에 가려지는 문제 발생
  // -> 해결법 '../pages/Login'에 작성해둠
  return (
    <>
      <BarWrapping>
        <NavigationButton
          onClick={toMypage}
          backgroundColor={buttonState === '1' ? '#F3C93F' : '#f7f6f2'}
        >
          Home
        </NavigationButton>
        <NavigationButton
          onClick={toSearch}
          backgroundColor={buttonState === '2' ? '#F3C93F' : '#f7f6f2'}
        >
          Search
        </NavigationButton>
        <NavigationButton
          onClick={toStamp}
          backgroundColor={buttonState === '3' ? '#F3C93F' : '#f7f6f2'}
        >
          Stamp
        </NavigationButton>
        <NavigationButton
          borderRight="none"
          onClick={toRanking}
          backgroundColor={buttonState === '4' ? '#F3C93F' : '#f7f6f2'}
        >
          Rank
        </NavigationButton>
      </BarWrapping>
    </>
  );
};

export default NavigationBar;
