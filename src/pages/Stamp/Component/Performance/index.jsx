import React from 'react';
import styled from 'styled-components';
import Header from '../../../../musterd-ui/Header';
import NavigationBar from '../../../../musterd-ui/NavigationBar';
import stampimg from '../StampPage/image/hackathon.png';

const TextWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff4de;
  border-bottom: 1.5px solid #000000;
`;

const LikeLionText = styled.div`
  color: ${(props) => props.fontColor || '#d98e00'};
  font-size: 30px;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
  text-shadow: 0px 0px 1px black;
  margin-bottom: ${(props) => props.marginBottom || '20px'};
  margin-top: ${(props) => props.marginTop || '10px'};
  -webkit-text-stroke: 1.5px black;
`;
const Text = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize || '30px'};
  font-family: 'Noto Sans KR', 200;
  justify-content: center;
  margin-top: ${(props) => props.marginTop || '10px'};
  margin-bottom: 10px;
  text-align: center;
  line-height: 30px;
`;

const Underline = styled.hr`
  width: ${(props) => props.width || '100vw'};
  border: 1px solid #000000;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 15%;
`;

const Image = styled.img`
  width: 300x;
  height: 300px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Performance = () => {
  return (
    <div>
      <Header back src="/stamp"></Header>
      <TextWrapper>
        <LikeLionText marginTop="30px" marginBottom="0px">
          LikeLion
        </LikeLionText>
        <LikeLionText fontColor="black">Mission Complete</LikeLionText>
        <Underline width="284px" />
        <Text fontSize="17px">
          참여해주셔서 감사합니다!
          <br /> 좋은 하루 보내시고 <br />
          친구와 내 플랜 & 장소를 함께하는
          <br /> Musterd 에도 관심가져주세요💛
        </Text>
      </TextWrapper>
      <ImageBox>
        <Image src={stampimg}></Image>
      </ImageBox>
      <NavigationBar pageNumber="3" />
    </div>
  );
};

export default Performance;
