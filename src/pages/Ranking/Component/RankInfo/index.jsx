import React from 'react';
import styled from 'styled-components';

const InfoWrapper = styled.div`
  height: 100px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Margin = styled.div`
  height: ${(props) => (props.height ? props.height : '100%')};
  width: ${(props) => (props.width ? props.width : '100%')};
`;

const Typography = styled.p`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '15px')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'regular')};
`;

const RankInfo = () => {
  return (
    <InfoWrapper>
      <Typography fontSize="30px" fontWeight="bold">
        Ranking
      </Typography>
      <Margin height="10px" />
      <Typography>: 나랑 가장 많은 시간을 보낸 친구를 알아보세요.</Typography>
    </InfoWrapper>
  );
};

export default RankInfo;
