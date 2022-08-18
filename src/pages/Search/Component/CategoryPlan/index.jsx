import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlanButton from '../PlanButton';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 2.625rem;
`;
const CategoryPlan = (planList) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider>
        {Array.isArray(planList.planList)
          ? planList.planList.map((plan) => {
              console.log(plan);
              return (
                <PlanButton
                  key={plan.id}
                  place={plan.place}
                  title={plan.title}
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
