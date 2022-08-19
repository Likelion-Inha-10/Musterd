import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 23px;
  height: 100px;
`;
const Box = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f3c93f;
  border: 1px solid #000000;
  font-sizw: 20px;
  font-weight: 800;
`;

const Text = styled.div`
  font-size: 30px;
  font-family: 'Roboto Slab', serif;
  font-weight: 900;
  display: flex;
  justify-content: center;
  margin-top: 3px;
`;

const Explain = () => {
  return (
    <div>
      <Wrapper>
        <Box>
          <Text>?</Text>
        </Box>
      </Wrapper>
    </div>
  );
};

export default Explain;
