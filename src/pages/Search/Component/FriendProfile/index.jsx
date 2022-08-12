import styled from 'styled-components';
const Wrapper = styled.div`
  background-color: blue;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
`;
const FriendProfile = ({ name, image, information }) => {
  return (
    <Wrapper>
      <Image src={image} />
      {name}
      {information}
    </Wrapper>
  );
};
export default FriendProfile;
