import React from 'react';
import styled from 'styled-components';
import stampimg from '../StampPage/image/hackathon.png';

const TextWrapper = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff4de;
  border: 1.1px solid #000000;
  border-left: none;
  border-right: none;
`;

const LikeLionText = styled.div`
  color: #d98e00;
  font-size: 30px;
  font-family: 'Roboto Slab', 800;
  text-shadow: 0px 0px 1px black;
  margin-top: 30px;
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
  width: 100vw;
  margin-top: 15vw;
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
      <TextWrapper>
        <LikeLionText>LikeLion</LikeLionText>
        <Text marginTop="10px">Mission Complete</Text>
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
    </div>
  );
};

export default Performance;
