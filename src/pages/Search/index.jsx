import { useEffect, useState } from 'react';
import SearchBar from '../../musterd-ui/SearchBar';
import styled from 'styled-components';
import * as categoryPlanApi from '../../apis/categoryPlanApi';
import * as friendListApi from '../../apis/friendListApi';
import CategoryPlan from './Component/CategoryPlan';
import FriendProfile from './Component/FriendProfile';

const Wrapper = styled.div``;

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
    <Wrapper>
      <SearchBar
        value={searchValue}
        onChange={onChange}
        onSubmit={onSubmit}
        placeHolder={'친구이름'}
      />
      {isTyped ? (
        <div>
          이쪽은 사용자가 검색을 했을때 친구 목록을 보여주는 모습
          {friendList.map((friend) => (
            <FriendProfile
              key={friend.id}
              id={friend.id}
              image={friend.image}
              name={friend.name}
              information={friend.information}
            />
          ))}
        </div>
      ) : (
        <div>
          여기는 사용자가 검색하지 않아서 카테고리별로 보여주는 모습
          {planList.map((plan) => (
            <CategoryPlan
              image={plan.image}
              key={plan.id}
              id={plan.id}
              category={plan.category}
              place={plan.place}
              writer={plan.writer}
              benefit={plan.benefit}
            />
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Search;
