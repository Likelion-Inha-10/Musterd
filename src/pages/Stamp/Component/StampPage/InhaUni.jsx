import React from 'react';
import Header from '../../../../musterd-ui/Header';
import InhaStampImg from '../StampPage/image/inhastamp.png';
import styled from 'styled-components';
import NavigationBar from '../../../../musterd-ui/NavigationBar';

const TextWrapper = styled.div`
  width: 100%;
  height: 143px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #a0ccff;
  border: 1.5px solid #000000;
  border-left: none;
  border-top: none;
  border-right: none;
`;

const LikeLionText = styled.div`
  color: #408ee8;
  font-size: 30px;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
  -webkit-text-stroke: 1.5px black;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const Text = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize || '30px'};
  font-family: 'NotoSansKR';
  font-weight: 300;
  justify-content: center;
  margin-top: ${(props) => props.marginTop || '10px'};
  margin-bottom: 10px;
  text-align: center;
  line-height: 20px;
`;

const Underline = styled.hr`
  width: ${(props) => props.width || '100vw'};
  border: 0.5px solid #000000;
`;

const ImageBox = styled.div`
  display: flex;
  width: 150px;
  margin-left: 20px;
  z-index: 1;
`;

const Image = styled.img`
  width: 130px;
  height: 572px;
  justify-content: center;
  align-items: center;
`;

const ShopText = styled.div`
  font-size: ${(props) => props.fontSize || '15px'};
  font-family: 'NotoSansKR';
  font-weight: ${(props) => props.fontWeight || '300'};
  margin-top: 10px;
`;
const ShopTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 130px;
  margin-bottom: 30px;
`;
const ShopTextWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const ShopWrpper = styled.div`
  display: flex;
  flex-direction: row;
`;

const InhaUni = () => {
  return (
    <div>
      <Header src="/stamp" back />
      <TextWrapper>
        <LikeLionText>INHA UNIV</LikeLionText>

        <Underline width="284px" />
        <Text fontSize="17px">
          인하대학교 주변 카페들을 직접 들러서
          <br />
          큐알을 찍고 스탬프들을 모아보세요!
        </Text>
      </TextWrapper>
      <ShopWrpper>
        <ImageBox>
          <Image src={InhaStampImg}></Image>
        </ImageBox>
        <ShopTextWrapper2>
          <ShopTextWrapper>
            <ShopText fontWeight="500">카페삼층 인하대점</ShopText>
            <ShopText fontSize="12px">
              인천광역시 남구 용현1.4동 인하로 53 3층
            </ShopText>
          </ShopTextWrapper>
          <ShopTextWrapper>
            <ShopText fontWeight="500">카페삼층 인하대점</ShopText>
            <ShopText fontSize="12px">
              인천광역시 남구 용현1.4동 인하로 53 3층
            </ShopText>
          </ShopTextWrapper>
          <ShopTextWrapper>
            <ShopText fontWeight="500">카페삼층 인하대점</ShopText>
            <ShopText fontSize="12px">
              인천광역시 남구 용현1.4동 인하로 53 3층
            </ShopText>
          </ShopTextWrapper>
        </ShopTextWrapper2>
      </ShopWrpper>
      <NavigationBar pageNumber="3" />
    </div>
  );
};

export default InhaUni;
