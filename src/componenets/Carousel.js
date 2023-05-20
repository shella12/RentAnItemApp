import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
import './Carousel.css';
import PropTypes from 'prop-types';

const Carousel = (props) => {
  const { houses } = props;
  const navigate = useNavigate();
  return (
    <>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {houses.map((house) => (
          <SwiperSlide key={house.id}>
            <img src={house.picture_url} alt="" className="caroselImage" />
            <button type="button" onClick={() => navigate(`/houses/${house.id}`, { state: { house } })} className="btn-see-details">See details</button>
          </SwiperSlide>
        )) }
      </Swiper>
    </>
  );
};

Carousel.propTypes = {
  houses: PropTypes.objectOf(
    ({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      owner_name: PropTypes.string,
      price: PropTypes.number,
      picture_url: PropTypes.string,
    }),
  ).isRequired,
};

export default Carousel;
