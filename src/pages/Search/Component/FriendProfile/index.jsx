import styled from 'styled-components';
import hand from '../../../../assets/img/hand.png';
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 3.4375rem;
  background-color: white;
  border: 0.0625rem solid black;
  margin-top: 1.6875rem;
`;
const Image = styled.img`
  border-radius: 50%;
  width: 2.1875rem;
  height: 2.1875rem;
  background-color: ${(props) => props.theme.colors.blue};
  border: 1px solid black;
`;
const PointWrapper = styled.div`
  min-width: 4.84375rem;
  display: flex;
  flex-direction: row;
  border-left: 0.0625rem solid black;
  justify-content: space-evenly;
  align-items: center;
  height: 3.4375rem;
  flex-wrap: wrap;
`;
const InfoWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const UserWrapper = styled.div`
  display: flex;
  margin-left: 1.1875rem;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1.3125rem;
  font-weight: bolder;
  letter-spacing: 3px;
`;
const FriendProfile = ({ id, name, image, point }) => {
  return (
    <Wrapper>
      <InfoWrapper>
        <UserWrapper>
          <Image src={image} />
          <NameWrapper>{name}</NameWrapper>
        </UserWrapper>
      </InfoWrapper>
      <PointWrapper>
        <img src={hand} alt="hand" />
        {point}
      </PointWrapper>
    </Wrapper>
  );
};
export default FriendProfile;
