import { React, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import mapIcon from '../../assets/img/mapIcon.png';
import groupIcon from '../../assets/img/groupIcon.png';
import rewardIcon from '../../assets/img/rewardIcon.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f7f6f2;
  border: 1.1px solid #000000;
  width: 229px;
  height: 204px;
  margin: 2px 2px 2px 2px;
`;
const Box = styled.div`
  width: 227px;
  height: 55px;
  background-color: #f3c93f;
  border-bottom: 1px solid;
`;
const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '180px')};
  height: 20px;
  margin: ${(props) => (props.margin ? props.margin : 'none')};
  text-align: left;
  background-color: transparent;
  border: none;
  font-size: ${(props) => (props.fontsize ? props.fontsize : '14px')};
`;

const TextWrapper = styled.div`
  display: flex;
  width: 180px;
  height: 30px;
  background-color: transparent;
  margin: 10px 0px 0px 20px;
  padding-bottom: 10px;
  border-bottom: ${(props) =>
    props.borderbottom ? props.borderbottom : '1px solid'};
`;
const Button = styled.div`
  width: 203px;
  height: 19px;
  border: 1.1px solid #000000;
  background-color: #f3c93f;
  text-align: center;
  font-size: 12px;
  padding-top: 2px;
  margin: 8px 0px 10px 10px;
  cursor: pointer;

  :hover {
    background-color: #00000084;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: column;
`;

const Image = styled.img`
  width: ${(props) => (props.width ? props.width : '13.1px')};
  height: ${(props) => (props.height ? props.height : '17.46px')};
  margin-right: 10px;
  margin-top: ${(props) => (props.margintop ? props.margintop : 'none')};
`;
const PlacePopUp = () => {
  const navigate = useNavigate();
  const [list, setList] = useState('');
  const [time, setTime] = useState('');

  const onChangeList = (e) => {
    setList(e.target.value);
  };

  const onChangeTime = (e) => {
    console.log(e.target.value);
    setTime(e.target.value);
  };

  return (
    <>
      <Container>
        <Box borderbottom="1px solid">
          <Input
            margin="10px 0px 0px 23px"
            onChange={onChangeList}
            value={list}
            type="text"
            placeholder="여기에 플랜명을 입력하세요"
          />
          <Input
            margin="0px 0px 0px 75px"
            width="80px"
            fontsize="10px"
            onChange={onChangeTime}
            value={time}
            type="time"
            placeholder="시간"
          />
        </Box>
        <TextWrapper>
          <Image src={mapIcon} />
          <p>장소</p>
        </TextWrapper>
        <TextWrapper>
          <Image
            src={rewardIcon}
            width="14.59px"
            height="14.07px"
            margintop="5px"
          />
          <p>보상</p>
        </TextWrapper>
        <TextWrapper borderbottom="none">
          <Image
            src={groupIcon}
            width="16.08px"
            height="12.99px"
            margintop="5px"
          />
          <p>인원수</p>
        </TextWrapper>
        <ButtonWrapper>
          <Button>Add</Button>
        </ButtonWrapper>
      </Container>
    </>
  );
};

export default PlacePopUp;

/*적용해야하는 것: 창 종료버튼 onClick, 카테고리 onClick, 검색 onClick*/
