import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import searchIcon from '../assets/img/searchIcon.png';
const Wrapper = styled.div`
  display: flex;
`;
const ButtonWrapper = styled.div`
  width: 4.75rem;
  height: 4.25rem;
  background-color: ${(props) => props.theme.colors.mustard};
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: none;
  border-right: 1px solid black;
`;
const InputWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  border-left: none;
`;
const Input = styled.input`
  width: 100%;
  padding-left: 1rem;
  border: none;
  ::placeholder {
    letter-spacing: 1.05px;
  }
  letter-spacing: 3px;
  font-weight: 900;
  background: none;
`;

const SearchBar = ({ value, onChange, onSubmit, placeHolder }) => {
  return (
    <Wrapper>
      <ButtonWrapper onClick={onSubmit}>
        <img src={searchIcon} />
      </ButtonWrapper>
      <InputWrapper>
        <Input value={value} onChange={onChange} placeholder={placeHolder} />
      </InputWrapper>
    </Wrapper>
  );
};

export default SearchBar;
