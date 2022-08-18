import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TypoContainer = styled.div`
  width: 80%;
  height: 200px;
  background-color: transparent;
  text-align: center;
  padding-top: 70px;
  margin-left: 50px;
  margin-top: 20px;
`;

const Line = styled.div`
  border: 1px solid;
  width: 50%;
  margin: auto;
`;
const Typography = styled.div`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '15px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'regular')};
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
  line-height: 1.2;
  margin-bottom: ${(props) =>
    props.marginbottom ? props.marginbottom : 'none'};
`;

const PageInfo = () => {
  const navigate = useNavigate();

  return (
    <>
      <Line />
      <TypoContainer>
        <Typography fontSize="20px" fontWeight="bold" marginbottom="5px">
          인하대학교 Musterd팀을 찾아오시면
        </Typography>
        <Typography fontSize="20px" fontWeight="bold" marginbottom="5px">
          QR코드를 제공해 드립니다!
        </Typography>
        <Typography fontSize="20px" fontWeight="bold" marginbottom="5px">
          저희를 찾아와 QR을 인식하시고
        </Typography>
        <Typography fontSize="20px" fontWeight="bold">
          LikeLion 스탬프를 받아보세요!
        </Typography>
      </TypoContainer>
    </>
  );
};

export default PageInfo;
