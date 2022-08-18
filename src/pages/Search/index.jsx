import { useEffect, useState } from 'react';
import SearchBar from '../../musterd-ui/SearchBar';
import styled from 'styled-components';
import * as categoryPlanApi from '../../apis/categoryPlanApi';
import * as friendListApi from '../../apis/friendListApi';
import CategoryPlan from './Component/CategoryPlan';
import FriendProfile from './Component/FriendProfile';
import NavigationBar from '../../musterd-ui/NavigationBar';

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.basic};
  height: 100%;
  display: flex;
  flex-direction: column;
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
  &:focus {
    border-color: red;
  }
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

const OPTIONS = [
  { value: 'all', name: 'Category' },
  { value: 'cafe', name: 'Cafe' },
  { value: 'eat', name: '식사' },
  { value: 'sports', name: '스포츠' },
  { value: 'hobby', name: '취미' },
  { value: 'study', name: '스터디' },
];

const SelectBox = (props) => {
  return (
    <Select>
      {props.options.map((option) => (
        <option
          value={option.value}
          defaultValue={props.defaultValue === option.value}
        >
          {option.name}
        </option>
      ))}
    </Select>
  );
};

const Search = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isTyped, setIstTyped] = useState(false);
  const [planList, setPlanList] = useState([]);
  const [friendList, setFriendList] = useState([]);
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
              <SelectBox options={OPTIONS} />
            </SelectWrapper>
            {planList.map((plan) => (
              <>
                <CategoryWrapper>#{plan.category}</CategoryWrapper>
                <CategoryPlan planList={plan.plan_list} />
              </>
            ))}
          </>
        )}
        <NavigationBar />
      </Wrapper>
    </>
  );
};

export default Search;
