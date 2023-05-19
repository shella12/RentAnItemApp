import React, { useState } from 'react';
import './Carousel.css';
import PropTypes from 'prop-types';

const Carousel = (props) => {
  const { images } = props;
  console.log(images);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImageIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;
  const previousImageIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

  const nextImage = () => {
    setCurrentImageIndex(nextImageIndex);
  };

  const previousImage = () => {
    setCurrentImageIndex(previousImageIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-image-wrapper">
        <img className="carousel-image-back" src={images[previousImageIndex]} alt="" />
        <img className="carousel-image-middle" src={images[nextImageIndex]} alt="" />
        <img className="carousel-image-front" src={images[currentImageIndex]} alt="" />
      </div>
      <div>
        <button type="button" onClick={previousImage}>Previous</button>
        <button type="button" onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    ({
      picture_url: PropTypes.string,
    }),
  ).isRequired,
};

export default Carousel;
