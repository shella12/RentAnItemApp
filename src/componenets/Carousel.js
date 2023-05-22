import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './Carousel.css';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

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
            <div className="carousel-card-details">
              <div className="column">
                <p>{house.name}</p>
                <div>
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                  <AiFillStar className="stars" />
                  <AiOutlineStar className="stars" />
                </div>
              </div>
              <div className="column">
                <p>{house.price}</p>
                <p className="grey-text">per month</p>
              </div>
            </div>
            <button type="button" onClick={() => navigate(`/houses/${house.id}`, { state: { house } })} className="btn-see-details">See details</button>
          </SwiperSlide>
        )) }
      </Swiper>
    </>
  );
};

Carousel.propTypes = {
  houses: PropTypes.arrayOf(PropTypes.shape(
    ({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      owner_name: PropTypes.string,
      price: PropTypes.string,
      picture_url: PropTypes.string,
    }),
  ).isRequired,
)};

export default Carousel;
