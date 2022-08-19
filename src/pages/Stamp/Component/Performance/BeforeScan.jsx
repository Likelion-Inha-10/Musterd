import React, { useState, useEffect } from 'react';
import Header from '../../../../musterd-ui/Header';
import styled from 'styled-components';
import { BsFillCameraFill } from 'react-icons/bs';
import blur from '../StampPage/image/missionbg.png';
import { useNavigate } from 'react-router-dom';

const AlltWrapper = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: absolute;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  position: relative;
  z-index: 1;
`;
const Image = styled.img`
  width: 300x;
  height: 300px;
  filter: blur(15px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LikeLionText = styled.div`
  padding-right: 10px;
  color: ${(props) => props.fontColor || '#d98e00'};
  font-size: 30px;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
  margin-top: 25px;
  margin-bottom: 25px;
  -webkit-text-stroke: 1.5px black;
`;
const Text = styled.div`
  display: flex;
  font-size: ${(props) => props.fontSize || '30px'};
  font-family: 'NotoSansKR';
  font-weight: 400;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 25px;
  text-align: center;
  line-height: 30px;
`;

const Underline = styled.hr`
  width: ${(props) => props.width || '100%'};
  border: 1px solid #000000;
`;

const QrButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #f3c93f;
  border: 1px solid #000000;
  margin-left: 80%;
`;

const BeforeScan = () => {
  const navigate = useNavigate();
  const moveToScan = () => {
    navigate('/scan');
  };
  return (
    <>
      <Header src="/stamp" back />
      <AlltWrapper>
        <ImageBox>
          <Image src={blur}></Image>
        </ImageBox>

        <TextWrapper>
          <TitleWrapper>
            <LikeLionText>Like Lion</LikeLionText>
            <LikeLionText fontColor="black">Mission</LikeLionText>
          </TitleWrapper>

          <Underline width="284px" />

          <Text fontSize="17px">
            중앙해커톤에서 “인하대학교 주당팀”을 <br /> 찾아보시고 카메라를 통해
            QR을 찍어보세요!
          </Text>
        </TextWrapper>
      </AlltWrapper>

      <QrButton>
        <BsFillCameraFill onClick={moveToScan} size="25px" />
      </QrButton>
    </>
  );
};

export default BeforeScan;
