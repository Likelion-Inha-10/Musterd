import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { GrSearch } from 'react-icons/gr';
import * as friendListApi from '../../apis/friendListApi';
import map from '../../assets/img/mapIcon.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f6f2;
  border: 1px solid #000000;
  width: 337px;
  height: 296px;
`;

const Input = styled.input`
  font-family: 'Noto Sans KR', sans-serif;
  width: ${(props) => (props.width ? props.width : '237px')};
  padding-left: 15px;
  padding-right: 10px;
  height: 37px;
  background-color: ${(props) =>
    props.backColor ? props.backColor : '#f7f6f2'};
  border-top: ${(props) => (props.borderTop ? props.borderTop : 'none')};
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : 'none')};
  border-right: ${(props) => (props.borderRight ? props.borderRight : 'none')};
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : 'none'};
`;

const Box = styled.div`
  width: ${(props) => (props.width ? props.width : '29px')};
  height: ${(props) => (props.height ? props.height : '29px')};
  background-color: #f3c93f;
  border-top: ${(props) => (props.borderTop ? props.borderTop : 'none')};
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : 'none')};
  border-right: ${(props) => (props.borderRight ? props.borderRight : 'none')};
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : 'none'};
  margin: ${(props) => (props.margin ? props.margin : 'none')};
  text-align: center;
  padding-top: ${(props) => (props.paddingtop ? props.paddingtop : 'none')};
  cursor: pointer;
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TimeWrapper = styled.div`
  height: 37px;
  display: flex;
  align-items: center;
`;

const StyledButton = styled.button`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => props.height};
  border: 1.1px solid #000000;
  background-color: #f3c93f;
  text-align: center;
  font-size: 18px;
  border-top: ${(props) =>
    props.borderTop ? props.borderTop : '1px solid black'};
  border-left: ${(props) =>
    props.borderLeft ? props.borderLeft : '1px solid black'};
  border-right: ${(props) =>
    props.borderRight ? props.borderRight : '1px solid black'};
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : '1px solid black'};
  font-size: ${(props) => props.fontSize};
  cursor: pointer;
  :hover {
    background-color: rgba(242, 201, 63, 0.8);
  }
`;

const CategoryBtn = styled.select`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100px;
  background-color: ${(props) => props.backgroundColor || '#efc63e'};
  border-top: ${(props) => (props.borderTop ? props.borderTop : 'none')};
  border-left: ${(props) => (props.borderLeft ? props.borderLeft : 'none')};
  border-right: ${(props) => (props.borderRight ? props.borderRight : 'none')};
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : 'none'};
  -webkit-scrollbar {
    display: none;
  }
  size: ${(props) => props.size};
  cursor: pointer;
`;

const Option = styled.option`
  background-color: ${(props) => props.backgroundColor};
  position: absolute;
  width: 100px;
  height: 24px;
  border-top: 1px solid black;
  border-left: ${(props) => props.borderLeft || '1px solid black'};
  border-right: ${(props) => props.borderRight || 'none'};
  border-bottom: ${(props) => props.borderBottom || 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.marginTop};
  cursor: pointer;
`;

const LocationWrapper = styled.div`
  height: 128px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px auto;
  width: 80%;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid black;
  box-shadow: 0px 0px 6px #00000029;
`;

const MapIconWrapper = styled.img`
  width: 13px;
  height: 18px;
  margin-left: 5px;
`;

const TypoContainer = styled.div`
  width: 60%;
  padding-left: 15px;
  font-size: 15px;
`;

const MaximumContainer = styled.input`
  width: 50px;
  height: 24px;
  margin-right: 10px;
  font-size: 5px;
  text-align: center;
  border: 1px solid black;
`;

const AddPopUp = (props) => {
  const [toDo, setToDo] = useState(''); //할 일 저장
  const [search, setSearch] = useState(''); //장소 검색
  const [maximum, setMaximum] = useState('');
  const [isTyped, setIstTyped] = useState(false);
  const [location, setLocationList] = useState([]); //장소 리스트
  const [category, setCategory] = useState('Category'); //카테고리 설정
  const [buttonColor, setButtonColor] = useState('#efc63e'); //카테고리 배경색
  const [isCategoryName, setIsCategoryName] = useState(true);
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  /*category 설정 부분*/
  const CategoryMenu = () => {
    if (isCategoryName) {
      return (
        <CategoryBtn
          borderTop="1px solid black"
          borderLeft="1px solid black"
          backgroundColor={buttonColor}
          onClick={ViewMenu}
        >
          <option>{category}</option>
        </CategoryBtn>
      );
    } else {
      return (
        <CategoryBtn size="6">
          <Option
            value="Cafe"
            backgroundColor="#EF7373"
            onClick={ToCafe}
            borderLeft="1px solid black"
          >
            Cafe
          </Option>
          <Option
            value="Eat"
            backgroundColor="#E5B342"
            onClick={ToEat}
            marginTop="24px"
          >
            Eat
          </Option>
          <Option
            value="Sports"
            backgroundColor="#EBF061"
            onClick={ToSport}
            marginTop="48px"
          >
            Sports
          </Option>
          <Option
            value="Hobby"
            backgroundColor="#6AE5A2"
            onClick={ToHobby}
            marginTop="72px"
          >
            Hobby
          </Option>
          <Option
            value="Study"
            backgroundColor="#7594EA"
            onClick={ToStudy}
            marginTop="96px"
          >
            Study
          </Option>
          <Option
            value="Daily"
            backgroundColor="#B475EA"
            onClick={ToDaily}
            marginTop="120px"
            borderBottom="1px solid black"
          >
            Daily
          </Option>
        </CategoryBtn>
      );
    }
  };
  const ToCafe = () => {
    setCategory('Cafe');
    setButtonColor('#EF7373');
    setIsCategoryName(true);
  };
  const ToEat = () => {
    setCategory('Eat');
    setButtonColor('#E5B342');
    setIsCategoryName(true);
  };
  const ToSport = () => {
    setCategory('Sports');
    setButtonColor('#EBF061');
    setIsCategoryName(true);
  };
  const ToHobby = () => {
    setCategory('Hobby');
    setButtonColor('#6AE5A2');
    setIsCategoryName(true);
  };
  const ToStudy = () => {
    setCategory('Study');
    setButtonColor('#7594EA');
    setIsCategoryName(true);
  };
  const ToDaily = () => {
    setCategory('Daily');
    setButtonColor('#B475EA');
    setIsCategoryName(true);
  };
  const ViewMenu = () => {
    setIsCategoryName(false);
  };
  /*category 설정 부분*/

  useEffect(() => {
    const timeId = setTimeout(() => {
      friendListApi.getFriendByName(search).then((res) => {
        setLocationList(res);
        // console.log(res);
      });
    }, 300);
    return () => {
      clearTimeout(timeId);
    };
  }, [search]);

  const onChangeToDo = (e) => {
    setToDo(e.target.value);
  };

  const onChangeDate = (e) => {
    //날짜를 2022-08-18이면 20220818 형태로 설정
    const regex = e.target.value.match(/\d+/g);
    const tempDate = regex[0] + regex[1] + regex[2];
    const date = parseInt(tempDate);
    setDate(date);
  };
  const onChangeTime = (e) => {
    const regex = e.target.value.match(/\d+/g);
    const temptime = regex[0] + regex[1];
    const time = parseInt(temptime);
    setTime(time);
  };

  const onChangeSearch = (e) => {
    if (e.target.value !== '') {
      setIstTyped(true);
    } else {
      setIstTyped(false);
    }
    setSearch(e.target.value);
    // console.log(e.target.value);
  };

  const onExitClick = () => {
    props.setPopModal(!props.PopModal);
  };

  const onSearch = () => {
    //돋보기버튼 클릭시
    //api 통신(장소리스트 get? post?)
  };

  const onChangeMaximum = (e) => {
    setMaximum(e.target.value);
  };

  const onSubmit = () => {
    // axios.post(`apiurl`),
    //   {
    //     title: toDo,
    //     category: category,
    //     place: search,
    //     max_count: maximum,
    //   }.then(() => console.log('성공'));
    console.log(toDo, category, search, maximum, date, time);
    props.setPopModal(!props.PopModal);
  };

  return (
    <>
      <Container>
        <Box
          onClick={onExitClick}
          margin="10px 10px 10px 295px"
          paddingtop="3px"
          borderTop="1px solid black"
          borderLeft="1px solid black"
          borderRight="1px solid black"
          borderBottom="1px solid black"
        >
          <AiOutlineClose size="20px" />
        </Box>
        {/* 여기서부터 시간 설정 영역 */}
        <TimeWrapper>
          <Input
            backColor="#f3c93f"
            type="date"
            width="50%"
            borderTop="1px black solid"
            borderRight="1px black solid"
            placeholder="날짜 설정"
            onChange={onChangeDate}
          ></Input>
          <Input
            backColor="#f3c93f"
            borderTop="1px black solid"
            type="time"
            width="50%"
            onChange={onChangeTime}
          ></Input>
        </TimeWrapper>
        {/* 여기까지 시간 설정 영역 */}
        {/* 여기서부터 카테고리 영역 */}
        <BtnWrapper>
          <Input
            onChange={onChangeToDo}
            value={toDo}
            borderTop="1px solid black"
            type="text"
            placeholder="To do"
          />
          <CategoryMenu />
        </BtnWrapper>
        {/* 여기까지카테고리 영역 */}
        <BtnWrapper>
          <Box
            width="55px"
            height="37px"
            paddingtop="8px"
            borderTop="1px solid black"
            borderRight="1px solid black"
            borderBottom="1px solid black"
          >
            <GrSearch onClick={onSearch} size="20px" />
          </Box>
          {/* 여기서부터 검색창영역 */}
          <Input
            width="282px"
            onChange={onChangeSearch}
            value={search}
            borderTop="1px solid black"
            borderBottom="1px solid black"
            type="text"
            placeholder="Place"
          />
        </BtnWrapper>
        <LocationWrapper>
          {isTyped ? (
            <div>
              {location.map((location) => (
                <LocationContainer>
                  <MapIconWrapper src={map} />
                  <TypoContainer>{location.name}</TypoContainer>
                  <MaximumContainer
                    value={maximum}
                    type="text"
                    placeholder="참여인원"
                    onChange={onChangeMaximum}
                  />
                  <StyledButton
                    onClick={() => setSearch(location.name)}
                    fontSize="12px"
                    height="24px"
                    width="60px"
                  >
                    Select
                  </StyledButton>
                </LocationContainer>
              ))}
            </div>
          ) : (
            <></>
          )}
        </LocationWrapper>
        {/* 여기까지 검색창영역 */}
        <StyledButton
          onClick={onSubmit}
          height="43px"
          borderLeft="none"
          borderRight="none"
          borderBottom="none"
        >
          Add
        </StyledButton>
      </Container>
    </>
  );
};

export default AddPopUp;
