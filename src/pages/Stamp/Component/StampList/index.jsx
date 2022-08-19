import React from 'react';
import styled from 'styled-components';
import { FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const AllWrapper = styled.div`
  height: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
const Wrapper = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.backgroundColor || 'white'};
  border: 1px solid #000000;
  width: 283px;
  height: 71px;
  margin-bottom: 15vw;
`;

const UniText = styled.div`
  display: flex;
  font-size: 26px;
  font-family: 'Roboto Slab', serif;
  font-weight: 800;
  justify-content: center;
  margin-top: 20px;
`;
const PageButton = styled.button`
  background-color: ${(props) => props.backgroundColor || 'white'};
  border: 1px solid #000000;
  width: 46px;
  height: 71px;
`;

const StampList = () => {
  let navigate = useNavigate();

  const moveToLikeLion = () => {
    navigate('/stamp/likelion');
  };

  const moveToInha = () => {
    navigate('/stamp/inha');
  };

  const moveToHarvard = () => {
    navigate('/stamp/harvard');
  };
  return (
    <div>
      <AllWrapper>
        <Wrapper>
          <Box backgroundColor="#d98e00">
            <UniText>LIKE LION</UniText>
          </Box>
          <PageButton onClick={moveToLikeLion} backgroundColor="#F0B139">
            <FiChevronRight size="30px" />
          </PageButton>
        </Wrapper>

        <Wrapper>
          <Box backgroundColor="#7BB6FA">
            <UniText>INHA UNIV</UniText>
          </Box>
          <PageButton onClick={moveToInha} backgroundColor="#B2D6FF">
            <FiChevronRight size="30px" />
          </PageButton>
        </Wrapper>

        <Wrapper>
          <Box backgroundColor="#B43328">
            <UniText>HARVARD UNIV</UniText>
          </Box>
          <PageButton onClick={moveToHarvard} backgroundColor="#D97C74">
            <FiChevronRight size="30px" />
          </PageButton>
        </Wrapper>
      </AllWrapper>
    </div>
  );
};

export default StampList;
