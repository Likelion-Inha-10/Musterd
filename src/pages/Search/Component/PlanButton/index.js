import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: red;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
`;
const PlanButton = (props) => {
  return (
    <Wrapper>
      <Image src={props.profile_image} />
      {props.place}
      {props.title}
      {props.promise_time}
    </Wrapper>
  );
};
export default PlanButton;
