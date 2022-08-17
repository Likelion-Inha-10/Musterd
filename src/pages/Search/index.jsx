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
`;
const InfoWrapper = styled.div`
  margin: 2.8125rem;
`;
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
        <InfoWrapper>
          {isTyped ? (
            <>
              {friendList.map((friend) => (
                <FriendProfile
                  key={friend.id}
                  id={friend.id}
                  image={friend.image}
                  name={friend.name}
                  point={friend.point}
                />
              ))}
            </>
          ) : (
            <>
              여기는 사용자가 검색하지 않아서 카테고리별로 보여주는 모습
              {planList.map((plan) => (
                <>
                  {plan.category}
                  <CategoryPlan planList={plan.plan_list} />
                </>
              ))}
            </>
          )}
        </InfoWrapper>
        <NavigationBar />
      </Wrapper>
    </>
  );
};

export default Search;
