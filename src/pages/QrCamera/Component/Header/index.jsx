import React from 'react';
import styled from 'styled-components';
import { MdKeyboardBackspace } from 'react-icons/md';

const StyledHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  border-bottom: solid 1px #655930;
`;

const Typography = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '15px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'regular')};
  color: ${(props) => (props.fontColor ? props.fontColor : 'black')};
  line-height: 1.2;
`;

const Header = () => {
  return (
    <StyledHeader>
      <MdKeyboardBackspace />
      <Typography>Musterd</Typography>
    </StyledHeader>
  );
};

export default Header;
