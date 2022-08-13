import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
const Wrapper = styled.div`
  display: flex;
`;
const Input = styled.input``;

const SearchBar = ({ value, onChange, onSubmit, placeHolder }) => {
  return (
    <Wrapper>
      <Input value={value} onChange={onChange} placeholder={placeHolder} />
      <BsSearch onClick={onSubmit} />
    </Wrapper>
  );
};

export default SearchBar;
