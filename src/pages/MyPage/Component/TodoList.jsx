import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsPlusSquare,
  BsDashSquare,
  BsChevronDown,
  BsChevronUp,
  BsCheckCircle,
  BsDashCircle,
} from 'react-icons/bs';
import { getPlan } from '../../../apis/planApi';
import * as planApi from '../../../apis/planApi';
import { setCookies } from './../../Login/index';
import { TextBox } from '../../../musterd-ui/LoginSignupStyled';
import Modal from '../../../musterd-ui/Modal';
import NavigationBar from '../../../musterd-ui/NavigationBar';

// 전체 컨테이너
const Container = styled.div`
  min-width: 375px;
  min-height: 812px;

  background-color: #f7f6f2;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* hr .css */
  .tophr {
    min-width: 375px;
    border: 1.1px solid black;
  }
`;

// *******************************************TopBar***********************************************

//  Musterd 글씨와 프사 있는 TopBar
const TopBar = styled.div`
  height: 49px;
  display: flex;
`;

// Musterd 텍스트
const MusterdText = styled.div`
  width: 58px;
  height: 20px;

  font-size: 15px;

  margin: 14px 239px 15px 25px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 프사
const ProfilePic = styled.div`
  width: 29px;
  height: 29px;
  border: 1.1px solid black;
  border-radius: 50%;

  margin-right: 24px;
  margin-top: 10px;
  margin-bottom: 10px;

  background-color: #3993cb;
`;

// ******************************************Calendar***********************************************

// 캘린더 박스
const Calendar = styled.div`
  width: 88px;
  height: 21px;

  margin-top: 17px;
  margin-left: 272px;

  border: 1.1px solid black;
  background-color: #f2c93f;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// Calendar 텍스트
const CalendarText = styled.div`
  font-size: 13px;
  font-weight: 700;

  margin-right: 10px;
`;
// ***********************************************************************************************

//  좌우버튼 , 연도 , 날짜 , 요일 컨테이너
const DateContainer = styled.div`
  width: 375px;
  border: none;
  text-align: center;
  padding: 10px 10px 0 10px;
  margin: 20px 0;
`;

// 연도
const NowYear = styled.div`
  margin-left: 50px;
  float: left;
  margin-top: 16px;
  font-family: 'Roboto Slab', serif;
  font-weight: 500;
`;

// 날짜
const NowDate = styled.div`
  font-size: 35px;
  margin-left: 20px;
  margin-right: 20px;
  text-align: center;
  display: inline;
  font-family: 'Roboto Slab', serif;
  font-weight: 500;
`;

// 요일
const DayWeek = styled.div`
  width: 60px;
  height: 16px;
  font-size: 15px;
  float: right;
  margin-right: 20px;
  margin-top: 16px;
  font-family: 'Roboto Slab', serif;
  font-weight: 500;
`;
const TimeBar = () => {
  let now = new Date(); // 현재 날짜 및 시간
  let todayYear = now.getFullYear(); // 연도 가져옴
  let todayMonth = now.getMonth() + 1; // 월 가져옴
  let todayDate = now.getDate(); // 일 가져옴
  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  //let dayOfWeek = week[weekIndex]; // 요일 가져옴
  const [weekIndex, setWeekIndex] = useState(now.getDay());
  const [year, setYear] = useState(todayYear);
  const [date, setDate] = useState(todayDate);
  const [month, setMonth] = useState(todayMonth);

  const onCLickNextDay = () => {
    if (month === 2) {
      if (date === 28) {
        setMonth(3);
        setDate(1);
      } else setDate(date + 1);
    }
    if (month === 12) {
      //12월
      if (date === 31) {
        setYear(year + 1);
        setMonth(1);
        setDate(1);
      } else setDate(date + 1);
    }
    if (
      (month % 2 === 1 && month <= 7 && month > 0) ||
      (month % 2 === 0 && month >= 8 && month < 12) //1, 3, 5, 7, 8, 10월
    ) {
      if (date === 31) {
        setDate(1);
        setMonth(month + 1);
      } else setDate(date + 1);
    }
    if (
      (month % 2 === 0 && month <= 7 && month > 3) ||
      (month % 2 === 1 && month >= 8 && month < 12) //4,6,9,11월
    ) {
      if (date === 30) {
        setDate(1);
        setMonth(month + 1);
      } else setDate(date + 1);
    }

    //요일
    if (weekIndex === 6) setWeekIndex(0);
    else setWeekIndex(weekIndex + 1);
  };

  const onClickPrevDay = (e) => {
    if (month === 1) {
      //1월
      if (date === 1) {
        setYear(year - 1);
        setMonth(12);
        setDate(31);
      } else setDate(date - 1);
    }
    if (month === 3) {
      if (date === 1) {
        setMonth(2);
        setDate(28);
      } else setDate(date - 1);
    }
    if (
      (month % 2 === 1 && month <= 7 && month >= 5) ||
      (month % 2 === 0 && month >= 10 && month <= 12) //5,7,10,12
    ) {
      if (date === 1) {
        setMonth(month - 1);
        setDate(30);
      } else setDate(date - 1);
    }
    if (
      (month % 2 === 0 && month <= 8 && month > 1) ||
      (month % 2 === 1 && month >= 9 && month < 12) //2,4,6,8,9,11
    ) {
      if (date === 1) {
        setDate(31);
        setMonth(month - 1);
      } else setDate(date - 1);
    }

    //요일
    if (weekIndex === 0) setWeekIndex(6);
    else setWeekIndex(weekIndex - 1);
  };

  return (
    <>
      <DateContainer>
        <TextBox fontSize="30px" float="left">
          <BsChevronCompactLeft onClick={onClickPrevDay} cursor="pointer" />
        </TextBox>
        <NowYear>{year}</NowYear>
        <NowDate>
          {month}.{date}
        </NowDate>
        <TextBox fontSize="30px" float="right">
          <BsChevronCompactRight onClick={onCLickNextDay} cursor="pointer" />
        </TextBox>
        <DayWeek>{week[weekIndex]}</DayWeek>
      </DateContainer>
    </>
  );
};

//***************************************************************************************************

// Todo / Done 버튼 컨테이너
const DoneContainer = styled.div`
  height: 58px;

  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
// ButtonWrapper
const ButtonWrapper = styled.div`
  height: 58px;

  display: flex;
`;
// 노란 버튼
const YellowButton = styled.div`
  width: 188px;
  height: 58px;

  background-color: #f2c93f;
  border: 1.1px solid black;
  font-size: 15px;
  font-weight: 900;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 하얀 버튼
const WhiteButton = styled.div`
  width: 188px;
  height: 58px;

  border: 1.1px solid black;
  font-size: 15px;
  font-weight: 900;

  display: flex;
  justify-content: center;
  align-items: center;
`;

//********************************************************************************

// 플러스 마이너스 버튼 컨테이너
const PlusMinusContainer = styled.div`
  height: 24px;

  margin-top: 20px;

  display: flex;
`;

// ***********************************************************************************

// 전체적인 플랜박스들을 담는 컨테이너
const MainContainer = styled.div`
  height: 350px;

  display: flex;
  flex-direction: column;

  margin-top: 35px;

  /* 스크롤 바 */
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    height: 0px;
    border: 1px solid black;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f2c93f;
    border: 1px solid black;
  }
`;

// 체크박스 , 플랜 을 담는 컨테이너
const PlanContainer = styled.div`
  width: 333px;
  height: 49px;

  margin-bottom: 20px;

  display: flex;
  align-items: center;
`;

// 빈 체크박스
const EmptyCheckBox = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 18px;

  border: 1.1px solid black;
`;

// 체크된 체크박스
const FilledCheckBox = styled.div`
  width: 24px;
  height: 24px;

  margin-right: 18px;

  border: 1.1px solid black;
  background-color: #f2c93f;
`;

// 플랜 박스
const PlanBox = styled.div`
  width: 273px;
  height: 49px;

  border: 1.1px solid black;

  display: flex;
  align-items: center;
`;

// 플랜의 시간, 분 을 담는 박스
const PlanTimeContainer = styled.div`
  width: 45px;
  height: 15px;

  margin-left: 12px;
  margin-right: 7px;

  font-size: 10px;

  display: flex;
  align-items: center;
`;

// 플랜 시간 분
const PlanTime = styled.div`
  height: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 플랜 내용 박스
const PlanBody = styled.div`
  width: 148px;
  height: 20px;

  font-size: 15px;

  display: block;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 장소버튼
const PlaceButton = styled.div`
  width: 56px;
  height: 24px;
  border: 1.1px solid black;
  margin-right: 14px;

  background-color: #f3c93f;
  font-size: 15px;
  font-weight: bolder;

  display: flex;
  justify-content: center;
  align-items: center;
`;

// 친구의 장소버튼
const FriendPlaceButton = styled.div`
  width: 56px;
  height: 24px;
  border: 1.1px solid black;
  margin-right: 14px;

  background-color: #3993cb;
  font-size: 15px;
  font-weight: bolder;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TodoList = () => {
  const [plans, setPlans] = useState([]); // 플랜을 담는 배열
  const [clickToDo, setClickToDo] = useState(true); // 할 일 & 완료
  const [isOpen, setisOpen] = useState(false); // 캘린더
  const [modify, setModify] = useState(false); // 편집 기능
  const [addPopup, setAddPopup] = useState(false);
  const [placePopup, setPlacePopup] = useState(false);
  const [profilePopup, setProfilePopup] = useState(false); //모달 적용

  //프로필 누를때 팝업
  const onClickProfile = () => {
    setProfilePopup(!profilePopup);
  };

  // ToDo 를 클릭하면 true 값으로 바뀜.
  const onClickIsToDo = (e) => {
    setClickToDo(true);
  };

  // Done 을 누르면 false 값으로 바뀜.
  const onClickIsDone = (e) => {
    setClickToDo(false);
  };

  //캘린더 열고 닫기
  const onClickisOpen = (e) => {
    setisOpen(!isOpen);
  };
  //Plus 버튼 입력시 팝업
  const onClickPlus = () => {
    setAddPopup(!addPopup);
  };
  // 마이너스 버튼 눌렀을 때 편집기능
  const onClickModify = (e) => {
    setModify(!modify);
  };

  //장소클릭시 팝업
  const onClickPlace = () => {
    setPlacePopup(!placePopup);
  };
  //**************************************Api 관련********************************************

  // Api 값을 불러옴.
  useEffect(() => {
    planApi.getPlan().then((res) => {
      setPlans(res);
      console.log(res);
    });
  }, []);

  // 동그란 마이너스 버튼 눌렀을 때 삭제
  const onClickDelete = (e) => {
    console.log('삭제');
  };

  // 빈 체크박스 눌렀을 때 완료로 넘어감
  const onClickEmptyBox = (e) => {
    console.log('완료');
  };

  // 채워진 체크박스 눌렀을 때 미완료로 넘어감
  const onClickFilledBox = (e) => {
    console.log('미완료');
  };

  return (
    <>
      {addPopup ? (
        <Modal addModal={addPopup} setAddModal={setAddPopup} type="addPopUp" />
      ) : (
        <></>
      )}
      {placePopup ? (
        <Modal
          placeModal={placePopup}
          setPlaceModal={setPlacePopup}
          type="placePopUp"
        />
      ) : (
        <></>
      )}
      {profilePopup ? (
        <Modal
          profileModal={profilePopup}
          setProfileModal={setProfilePopup}
          type="myprofilePopUp"
        />
      ) : (
        <></>
      )}
      <Container>
        {/* TopBar */}
        <TopBar>
          <MusterdText>Musterd</MusterdText>
          <ProfilePic onClick={onClickProfile} />
        </TopBar>
        <hr className="tophr"></hr>
        {/* 캘린더 버튼 */}

        {/* 날짜 */}
        <TimeBar />
        {/* ToDo & Done 버튼 */}
        <DoneContainer>
          <ButtonWrapper onClick={onClickIsToDo}>
            {clickToDo ? (
              <YellowButton>ToDo</YellowButton>
            ) : (
              <WhiteButton>ToDo</WhiteButton>
            )}
          </ButtonWrapper>
          <ButtonWrapper onClick={onClickIsDone}>
            {!clickToDo ? (
              <YellowButton>Done</YellowButton>
            ) : (
              <WhiteButton>Done</WhiteButton>
            )}
          </ButtonWrapper>
        </DoneContainer>
        {/* 플러스 마이너스 버튼  */}
        <PlusMinusContainer>
          {/* 플러스 버튼 */}
          <BsPlusSquare
            style={{
              backgroundColor: '#F3C93F',
              marginLeft: '268px',
              marginRight: '33px',
            }}
            size="24"
            onClick={onClickPlus}
          />
          {/* 마이너스 버튼 */}
          {/* 마이너스 버튼을 누르면 완료버튼으로 바뀜 */}
          {modify ? (
            <BsCheckCircle
              style={{ marginRight: '26px' }}
              size="24"
              onClick={onClickModify}
            />
          ) : (
            <BsDashSquare
              style={{ backgroundColor: ' #F3C93F', marginRight: '26px' }}
              size="24"
              onClick={onClickModify}
            />
          )}
        </PlusMinusContainer>

        {/* 플랜 파트 */}
        <MainContainer>
          {clickToDo
            ? plans.map((plan) => (
                <>
                  {!plan.isDone && (
                    <PlanContainer key={plan.id}>
                      {/* 편집 기능을 눌렀다면 동그란 마이너스 아니면 빈 박스 */}
                      {modify ? (
                        <BsDashCircle
                          size="24"
                          color="#3993CB"
                          style={{ marginRight: '18px' }}
                          onClick={onClickDelete}
                        />
                      ) : (
                        <EmptyCheckBox onClick={onClickEmptyBox} />
                      )}
                      <PlanBox>
                        <PlanTimeContainer>
                          <PlanTime>
                            {Math.floor(plan.promise_time / 100)}
                          </PlanTime>
                          <p>:</p>
                          <PlanTime>{plan.promise_time % 100}</PlanTime>
                        </PlanTimeContainer>
                        <PlanBody>{plan.title}</PlanBody>
                        {plan.is_mine ? (
                          <PlaceButton onClick={onClickPlace}>
                            Place
                          </PlaceButton>
                        ) : (
                          <FriendPlaceButton>Place</FriendPlaceButton>
                        )}
                      </PlanBox>
                    </PlanContainer>
                  )}
                </>
              ))
            : plans.map((plan) => (
                <>
                  {plan.isDone && (
                    <PlanContainer key={plan.id}>
                      {modify ? (
                        <BsDashCircle
                          size="24"
                          color="#3993CB"
                          style={{ marginRight: '18px' }}
                          onClick={onClickDelete}
                        />
                      ) : (
                        <FilledCheckBox onClick={onClickFilledBox} />
                      )}
                      <PlanBox>
                        <PlanTimeContainer>
                          <PlanTime>
                            {Math.floor(plan.promise_time / 100)}
                          </PlanTime>
                          <PlanTime>{plan.promise_time % 100}</PlanTime>
                        </PlanTimeContainer>
                        <PlanBody>{plan.title}</PlanBody>
                        {plan.is_mine ? (
                          <PlaceButton>Place</PlaceButton>
                        ) : (
                          <FriendPlaceButton>Place</FriendPlaceButton>
                        )}
                      </PlanBox>
                    </PlanContainer>
                  )}
                </>
              ))}
        </MainContainer>
      </Container>
      <NavigationBar pageNumber="1" />
    </>
  );
};

export default TodoList;
