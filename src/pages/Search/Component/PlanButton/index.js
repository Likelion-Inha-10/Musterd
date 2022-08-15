import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Wrapper = styled.div`
  background-color: red;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const PlanButton = (props) => {
  const navigate = useNavigate();
  const onClickPlan = () => {
    // axios.post('/fiend/create/plan').then(navigate(`/friend/my-page`));
  };
  return (
    <Wrapper onClick={onClickPlan}>
      <Image src={props.profile_image} />
      {props.place}
      {props.title}
      {props.promise_time}
    </Wrapper>
  );
};
export default PlanButton;
