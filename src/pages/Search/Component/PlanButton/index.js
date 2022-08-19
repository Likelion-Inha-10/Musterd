import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import groupIconForCategory from '../../../../assets/img/groupIconForCategory.png';
import mapIconForCategory from '../../../../assets/img/mapIconForCategory.png';
import rewardIconForCategory from '../../../../assets/img/rewardIconForCategory.png';

const Wrapper = styled.div`
  padding-top: 1.09188rem;
  padding-left: 1.09188rem;
  padding-right: 1.09188rem;
  height: 100%;
  width: 100%;
`;
const AllWrapper = styled.div`
  border-right: 1px solid black;
`;
const Image = styled.img`
  width: 1.56875rem;
  height: 1.56875rem;
  border-radius: 50%;
  border: 1px solid black;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
`;
const Time = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid black;
  ${Image} {
    margin-right: 0.54938rem;
  }
  ${Time} {
    align-items: flex-end;
    justify-content: flex-end;
    font-size: 10px;
    font-weight: 200;
    margin: 4.86px;
  }
`;
const Lay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.665rem;
  justify-content: center;
`;
const Info = styled.div`
  display: flex;
`;

const Box = styled.div`
  margin: 5px;
  display: flex;
  font-size: 11px;
  font-weight: 200;
  ${Image} {
    margin-right: 5px;
    border: none;
    width: 8.85px;
    height: 11.81px;
  }
`;

const AddButton = styled.button`
  width: 8.02813rem;
  height: 1.19688rem;
  background-color: ${(props) => props.theme.colors.mustard};
  font-weight: 800;
  border: 1px black solid;
  margin-top: 1rem;
`;
const TitleInfo = styled.div`
  animation: textLoop 8s linear infinite;
  padding-right: 1.4881vw;
  @keyframes textLoop {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }
`;
const TitleInfoWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  transition: 0.3s;
`;

const PlanButton = (props) => {
  const navigate = useNavigate();
  const onClickPlan = () => {
    // axios.post('/fiend/create/plan').then(navigate(`/friend/my-page`));
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          <Image src={props.profile_image} />
          <TitleInfoWrapper>
            <TitleInfo>{props.title}</TitleInfo>
          </TitleInfoWrapper>
        </Title>
        <Time>{props.promise_time}</Time>
      </TitleWrapper>
      <Lay>
        <InfoWrapper>
          <Box>
            <Image src={mapIconForCategory} />
            {props.place}
          </Box>
          <Info>
            <Box>
              <Image src={rewardIconForCategory} />
              {props.reward}
            </Box>
            <Box>
              <Image src={groupIconForCategory} />
              {props.count}/{props.max_count}
            </Box>
          </Info>
          <AddButton onClick={onClickPlan}>Add</AddButton>
        </InfoWrapper>
      </Lay>
    </Wrapper>
  );
};
export default PlanButton;
