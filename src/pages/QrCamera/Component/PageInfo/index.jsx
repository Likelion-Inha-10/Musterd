import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const TypoContainer = styled.div`
  padding-left: 50px;
  width: 100%;
`;

const Typography = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '15px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'regular')};
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
  line-height: 1.2;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-left: 70%;
`;

const StyledButton = styled.button`
  border: none;
  border-radius: 30px;
  width: 100px;
  height: 50px;
  background-color: #f2c93f;
  box-shadow: 0px 4px 4px 0 rgb(0, 0, 0, 0.1);
  :hover {
    cursor: pointer;

    background-color: rgba(242, 201, 63, 0.8);
  }
`;

const PageInfo = () => {
  const navigate = useNavigate();

  //뒤로가기
  const onBackClick = () => {
    navigate('/stamp');
  };

  return (
    <>
      <TypoContainer>
        <Typography fontSize="20px" fontWeight="bold">
          QR 코드를 인식해서
        </Typography>
        <Typography fontSize="20px" fontWeight="bold">
          각 장소에서 제공하는
        </Typography>
        <Typography fontSize="20px" fontWeight="bold">
          혜택을 얻으세요!
        </Typography>
      </TypoContainer>
      <ButtonWrapper>
        <StyledButton onClick={onBackClick}>
          <Typography fontColor="white">돌아가기</Typography>
        </StyledButton>
      </ButtonWrapper>
    </>
  );
};

export default PageInfo;
