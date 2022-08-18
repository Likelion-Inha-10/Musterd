import { React, useRef, useState } from 'react';
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import { GrSearch } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f6f2;
  border: 1.1px solid #000000;
  width: 337px;
  height: 296px;
  margin: 2px 2px 2px 2px;
`;
const Input = styled.input`
  width: ${(props) => (props.width ? props.width : '237px')};
  height: 37px;
  text-align: left;
  background-color: #f7f6f2;
  border: 1px solid #000000;
`;
const Box = styled.div`
  width: ${(props) => (props.width ? props.width : '29px')};
  height: ${(props) => (props.height ? props.height : '29px')};
  background-color: #f3c93f;
  border: 1.1px solid #000000;
  margin: ${(props) => (props.margin ? props.margin : 'none')};
  text-align: center;
  padding-top: ${(props) => (props.paddingtop ? props.paddingtop : 'none')};
  cursor: pointer;

  :hover {
    background-color: #00000084;
  }
`;
const CategoryBtn = styled.div`
  width: 100px;
  height: 37px;
  background-color: #efc63e;
  border: 1.1px solid #000000;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-align: column;
`;
const Button = styled.div`
  width: 100%;
  height: 43px;
  border: 1.1px solid #000000;
  background-color: #f3c93f;
  text-align: center;
  font-size: 18px;
  padding-top: 10px;
  margin: 128px 0px 0px 0px;
  cursor: pointer;

  :hover {
    background-color: #00000084;
  }
`;

const AddPopUp = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
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
        <Box margin="10px 10px 10px 295px" paddingtop="2px">
          <VscClose size="23px" />
        </Box>
        <BtnWrapper>
          <Input
            onChange={onChangeList}
            value={list}
            type="text"
            placeholder="To do"
          />
          <CategoryBtn onClick={onClick} ref={dropdownRef}>
            {' '}
            <ul>
              <li>
                <p>Category</p>
              </li>
              <li>
                <p>카페</p>
              </li>
              <li>
                <p>식사</p>
              </li>
              <li>
                <p>스포츠</p>
              </li>
              <li>
                <p>취미</p>
              </li>
              <li>
                <p>스터디</p>
              </li>
              <li>
                <p>일상</p>
              </li>
            </ul>
          </CategoryBtn>
        </BtnWrapper>
        <BtnWrapper>
          <Box width="55px" height="37px" paddingtop="8px">
            <GrSearch size="20px" />
          </Box>
          <Input
            width="282px"
            onChange={onChangeSearch}
            value={search}
            type="text"
            placeholder="Place"
          />
        </BtnWrapper>
        <Button>Add</Button>
      </Container>
    </>
  );
};

export default AddPopUp;

/*적용해야하는 것: 창 종료버튼 onClick, 카테고리 onClick, Add onClick*/
