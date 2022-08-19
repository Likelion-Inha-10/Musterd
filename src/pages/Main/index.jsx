import styled from 'styled-components';
import BackImg from '../Main/landing.png';
import React from 'react';
import LikeImg from '../Main/landing_like.png';
import LionImg from '../Main/landing_lion.png';
import { useNavigate } from 'react-router-dom';

const ImageBox = styled.div`
  width: 100vw;
`;

const Image = styled.img`
  width: 100vw;
  height: 896px;
`;

const PlanContainer = styled.div`
  width: 333px;
  height: 49px;

  margin-bottom: 30px;

  display: flex;
  align-items: center;

  position: absolute;
  top: ${(props) => props.top || '100px'};

  margin-left: 50px;
  margin-top: 80vw;
`;

const EmptyCheckBox = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 18px;

  border: 1.1px solid black;
  background-color: #f2c93f;
`;

const PlanBox = styled.div`
  width: 273px;
  height: 49px;
  background-color: white;

  border: 1.1px solid black;

  display: flex;
  align-items: center;
  box-shadow: 0px 0px 6px #00000029;

  opacity: 1;
`;

const PlanBody = styled.div`
  width: ${(props) => props.width || '150px'};
  height: 20px;

  font-size: 18px;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;

  display: block;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  z-index: 1;

  margin-left: ${(props) => props.marginLeft || '50px'};
`;

const PlaceButton = styled.img`
  width: 56px;
  height: 24px;
  z-index: 1;
`;

const Main = () => {
  let navigate = useNavigate();

  const moveToLogin = () => {
    navigate('/login');
  };

  const moveToSign = () => {
    navigate('/signup');
  };
  return (
    <div>
      <ImageBox>
        <Image src={BackImg}></Image>
      </ImageBox>

      <PlanContainer>
        <EmptyCheckBox />
        <PlanBox onClick={moveToLogin}>
          <PlanBody width="140px" marginLeft="60px">
            Login
          </PlanBody>
          <PlaceButton src={LikeImg}></PlaceButton>
        </PlanBox>
      </PlanContainer>

      <PlanContainer top="200px">
        <EmptyCheckBox />
        <PlanBox onClick={moveToSign}>
          <PlanBody>Sing Up</PlanBody>
          <PlaceButton src={LionImg}></PlaceButton>
        </PlanBox>
      </PlanContainer>
    </div>
  );
};

export default Main;
