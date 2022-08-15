import { React, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 400px;
  height: 400px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
const Input = styled.input`
  width: 280px;
  height: 40px;
  margin: 30px 0px 10px 40px;
  text-align: center;
`;

const CategoryBtn = styled.div`
  width: 40px;
  height: 40px;
  background-color: black;
  margin: 10px 5px 0px 5px;
`;

const BtnWrapper = styled.div`
  display: flex;
  margin-left: 30px;
`;

const Button = styled.div`
  background-color: navy;
  color: yellow;
  border-radius: 16px;
  width: 150px;
  height: 40px;
  padding-top: 7px;
  cursor: pointer;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  margin: 0px 0px 0px 110px;

  :hover {
    background-color: grey;
  }
`;

const PlacePopUp = () => {
  const navigate = useNavigate();
  const [list, setList] = useState('');
  const [search, setSearch] = useState('');

  const onChangeList = (e) => {
    setList(e.target.value);
  };

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Container>
        <AiOutlineCloseSquare
          className="icon"
          style={{
            cursor: 'pointer',
            position: 'relative',
            top: '20px',
            left: '350px',
          }}
          color="red"
          size="30px"
        />

        <Input
          onChange={onChangeList}
          value={list}
          type="text"
          placeholder="할 일 목록 입력칸"
        />

        <BtnWrapper>
          <CategoryBtn />
          <CategoryBtn />
          <CategoryBtn />
          <CategoryBtn />
          <CategoryBtn />
          <CategoryBtn />
        </BtnWrapper>
        <Input
          onChange={onChangeSearch}
          value={search}
          type="text"
          placeholder="검색"
        />
        <BsSearch
          style={{
            cursor: 'pointer',
            position: 'relative',
            bottom: '35px',
            left: '290px',
          }}
        />
        <Button>생성</Button>
      </Container>
    </>
  );
};

export default PlacePopUp;

/*적용해야하는 것: 창 종료버튼 onClick, 카테고리 onClick, 검색 onClick*/
