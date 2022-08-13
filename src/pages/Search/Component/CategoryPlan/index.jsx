import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: red;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
`;
const CategoryPlan = ({ category, place, writer, benefit, image }) => {
  return (
    <Wrapper>
      <Image src={image} />
      {category}
      {place}
      {writer}
      {benefit}
    </Wrapper>
  );
};
export default CategoryPlan;
