import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Wrapper = styled.div`
  background-color: red;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
`;

const CategoryPlan = ({ id, category, place, writer, benefit, image }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Slider>
      <Wrapper>
        <Image src={image} />
        {category}
        {place}
        {writer}
        {benefit}
      </Wrapper>
    </Slider>
  );
};
export default CategoryPlan;
