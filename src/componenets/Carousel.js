import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import PropTypes from 'prop-types';

const Carousel = (props) => {
  const { houses } = props;
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1 className="heading">Rent a House</h1>

    </div>
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
