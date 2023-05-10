import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouse } from '../redux/house/house';

const Home = () => {
  const dispatch = useDispatch();
  const houses = useSelector((state) => state.housesSlice.houses);
  useEffect(() => {
    dispatch(fetchHouse());
  }, []);

  return (
    <>
      <Carousel showArrows>
        {houses.map((house) => (
          <div key={house.id}>
            <img src={house.picture} alt="" />
            <p className="legend">{house.name}</p>
          </div>
        )) }

      </Carousel>
    </>
  );
};

export default Home;
