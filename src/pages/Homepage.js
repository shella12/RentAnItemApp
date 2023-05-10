import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import gethousesApi from '../redux/house/house';

const Home = () => {
  const dispatch = useDispatch();
  const house = useSelector((state) => state.housesSlice.houses);
  useEffect(() => {
    setHouse(dispatch(gethousesApi()));
  }, []);
  console.log(house);
  return (
    <>
      <Carousel showArrows autoFocus>
        <div>
          <img
            src="https://github.com/shella12/RentAnItemBackend/assets/44798044/5bb4ea2c-4ae5-45b8-9083-aeafbfbcf287
  "
            alt=""
          />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img
            src="https://github.com/shella12/RentAnItemBackend/assets/44798044/5bb4ea2c-4ae5-45b8-9083-aeafbfbcf287
  "
            alt=""
          />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img
            src="https://github.com/shella12/RentAnItemBackend/assets/44798044/5bb4ea2c-4ae5-45b8-9083-aeafbfbcf287
  "
            alt=""
          />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    </>
  );
};

export default Home;
