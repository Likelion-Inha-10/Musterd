import styled from 'styled-components';
import React from 'react';
import LikeImg from '../Main/landing_like.png';
import LionImg from '../Main/landing_lion.png';
import { useNavigate } from 'react-router-dom';

const PlanContainer = styled.div`
  width: 333px;
  height: 49px;

  display: flex;
  align-items: center;
  position: sticky;
  margin-left: 50px;
  margin-top: 40px;
  margin-bottom: 50px;
`;

const EmptyCheckBox = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 18px;

  border: 1.1px solid black;
  background-color: #f2c93f;

  box-shadow: 0px 0px 15px #00000029;

  opacity: 1;
`;

const PlanBox = styled.div`
  width: 273px;
  height: 49px;
  background-color: white;

  border: 1.1px solid black;

  display: flex;
  align-items: center;
  box-shadow: 0px 0px 15px #00000029;

  opacity: 1;
`;

const PlanBody = styled.div`
  width: ${(props) => props.width || '120px'};
  height: 20px;

  font-size: 18px;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;

  margin-left: ${(props) => props.marginLeft || '20px'};
  margin-right: 10px;
`;

const PlaceButton = styled.img`
  width: 56px;
  height: 24px;
  z-index: 1;
`;

const PlanTime = styled.div`
  width: 30px;
  height: 15px;

  font-family: 'Roboto Slab', serif;
  font-weight: 300;

  margin-left: 20px;

  font-size: 10px;

  display: flex;
  align-items: center;
`;

const LikeLionText = styled.div`
  color: #f3c93f;
  font-size: 40px;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
  -webkit-text-stroke: 1.5px black;
  display: flex;
  margin-top: 200px;
  margin-bottom: 250px;
  justify-content: center;
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
      <LikeLionText>Musterd</LikeLionText>
      <PlanContainer>
        <EmptyCheckBox />
        <PlanBox onClick={moveToLogin}>
          <PlanTime>Now</PlanTime>
          <PlanBody marginLeft="30px" width="110px">
            Login
          </PlanBody>
          <PlaceButton src={LikeImg}></PlaceButton>
        </PlanBox>
      </PlanContainer>

      <PlanContainer top="200px">
        <EmptyCheckBox />
        <PlanBox onClick={moveToSign}>
          <PlanTime>Now</PlanTime>
          <PlanBody>Sign Up</PlanBody>
          <PlaceButton src={LionImg}></PlaceButton>
        </PlanBox>
      </PlanContainer>
    </div>
  );
};

export default Main;
