import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

// 투두리스트 전체를 담는 컨테이너
const TodoContainer = styled.div`
  width: 800px;
`;

//할 일 버튼
const WhatToDo = styled.div`
  width: 400px;
  height: 50px;
  
  font-size: 15px

  display: flex;
  align-items: center;
  justify-content: center;
`;

// 플러스 버튼
const PlusButton = styled.div`
  width: 30px;
  height: 30px;

  background-color: pink;
`;

// 플러스 버튼 컨테이너
const PlusButtonContainer = styled.div`
  display: flex;
  align-items: space-between;
`;

// 플랜 컨테이너
const PlanContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

// 플랜 전체를 담고 있는 박스
const PlanBox = styled.div`
  width: 400px;
  height: 30px;

  display: flex;
  background-color: cyan;
`;

// 체크박스
const CheckBox = styled.div`
  width: 10px;
  height: 10px;

  background-color: black;
`;

// 장소 버튼
const PlaceButton = styled.div`
  width: 50px;
  height: 10px;

  background-color: black;
`;

// 할 일을 적는 박스
const PlanBody = styled.div`
  font-size: 13px;
  font- weight: 700;
`;

// 시간을 보여주는 박스
const PlanTime = styled.div`
  font-size: 10px;
`;



const TodoList = ({ apiUrl }) => {
  const [plans, setPlans] = useState([]); // 진행중인 플랜을 담는 배열

  useEffect(() => {
    axios.get(`${apiUrl}/mypage`).then((res) => {
      setPlans(res.data);
    });
  }, []);

  const ChangeDone = (e) =>{
     axios.post(`${apiUrl}/tdl/${e.target.isDone}`).then(() => {
    window.location.reload(true);
  });
};

  return (
    <div>
      {plans.map((plan) => {
        
        return (
          <PlanContainer>
            <PlanBox key={plan.id}>

              { plan.isDone ? (
                {/* isDone 이 true 이면 안 뜸 */}
              ):(
                <>{/* isDone 이 false 이면 뜸 */}
                <CheckBox 
                  id={plan.isDone}
                  onClick={ChangeDone}
                  />
                  <PlanTime>{plan.promise_time}</PlanTime>
                  <PlanBody>{plan.title}</PlanBody>
                </>
              )
              }
            </PlanBox>
          </PlanContainer>
        );
      })}
    </div>
  );
};

export default TodoList;
