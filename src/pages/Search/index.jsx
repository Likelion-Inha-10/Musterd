import { React, useEffect, useState } from 'react';
import SearchBar from '../../musterd-ui/SearchBar';
import styled from 'styled-components';
import * as categoryPlanApi from '../../apis/categoryPlanApi';
import * as friendListApi from '../../apis/friendListApi';
import CategoryPlan from './Component/CategoryPlan';
import FriendProfile from './Component/FriendProfile';
import NavigationBar from '../../musterd-ui/NavigationBar';

const Nav = styled.div`
  height: 8.5%;
`;
const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.basic};
  height: 100%;
  display: flex;
  flex-direction: column;
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

const SelectWrapper = styled.div`
  margin-top: 0.78125rem;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  align-items: flex-end;
  margin-bottom: 1.4375rem;
`;
const Select = styled.select`
  text-align: center;
  height: 1.75rem;
  width: 6.375rem;
  font-size: 0.95rem;
  font-weight: 800;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }

  &:focus {
    border-color: red;
  }
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

const FriendWrapper = styled.div`
  margin: 2.8125rem;
`;
const CategoryWrapper = styled.div`
  font-size: 18px;
  font-weight: 900;
  margin-left: 1.53125rem;
  margin-bottom: 0.625rem;
`;

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isTyped, setIstTyped] = useState(false);
  const [planList, setPlanList] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [category, setCategory] = useState('Category'); //카테고리 설정
  const [buttonColor, setButtonColor] = useState('#efc63e'); //카테고리 배경색
  const [isCategoryName, setIsCategoryName] = useState(true);

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

  // planList 가져오기
  useEffect(() => {
    categoryPlanApi.getCategoryPlan().then((res) => {
      setPlanList(res);
    });
  }, []);

  //검색하는 사람의 이름이 변경될 때 마다 이름이 비슷한 사람들의 목록을 가져옴
  useEffect(() => {
    const timeId = setTimeout(() => {
      friendListApi
        .getFriendByName(searchValue)
        .then((res) => setFriendList(res));
    }, 300);
    return () => {
      clearTimeout(timeId);
    };
  }, [searchValue]);

  //검색창에 이름을 입력시 친구목록을 실시간으로 변경
  const onChange = (e) => {
    if (e.target.value !== '') {
      setIstTyped(true);
    } else {
      setIstTyped(false);
    }
    setSearchValue(e.target.value);
  };

  //돋보기 버튼을 눌렸을 때 등록 부분
  const onSubmit = () => {
    console.log(searchValue);
    //api 통신 부분
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

  return (
    <>
      <Wrapper>
        <SearchBar
          value={searchValue}
          onChange={onChange}
          onSubmit={onSubmit}
          placeHolder={'Search here'}
        />
        {isTyped ? (
          <FriendWrapper>
            {friendList.map((friend) => (
              <FriendProfile
                key={friend.id}
                id={friend.id}
                image={friend.image}
                name={friend.name}
                point={friend.point}
              />
            ))}
          </FriendWrapper>
        ) : (
          <>
            <SelectWrapper>
              <CategoryMenu />
            </SelectWrapper>
            {planList.map((plan) => (
              <>
                <CategoryWrapper># {plan.category}</CategoryWrapper>
                <CategoryPlan planList={plan.plan_list} />
              </>
            ))}
            <Nav>s</Nav>
          </>
        )}
      </Wrapper>
      <Nav />
      <NavigationBar pageNumber="2" />
    </>
  );
};

export default Search;
