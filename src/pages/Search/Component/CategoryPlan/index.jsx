import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlanButton from '../PlanButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  margin-bottom: 2.625rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  background-color: white;
  padding: 0.5rem;
  width: 100%;
`;
const CategoryPlan = (planList) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        {Array.isArray(planList.planList)
          ? planList.planList.map((plan) => {
              return (
                <PlanButton
                  key={plan.id}
                  place={plan.place_name}
                  title={plan.title}
                  name={plan.name}
                  max_count={plan.max_count}
                  count={plan.count}
                  reward={plan.reward}
                  promise_time={plan.promise_time}
                  profile_image={plan.profile_image}
                />
              );
            })
          : null}
      </Slider>
    </Wrapper>
  );
};
export default CategoryPlan;
