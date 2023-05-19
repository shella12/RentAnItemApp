import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../componenets/Carousel';
import { fetchHouse } from '../redux/house/house';
import Navbar from '../componenets/navbar/Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const { houses, status } = useSelector((state) => state.housesSlice);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHouse());
    }
  });
  // const images = houses.map((house) => house.picture_url);

  return (
    <>
      <Navbar title="Houses" />
      {houses?.length === 0 && (<p className="flex-center empty-list">No Houses: List Empty</p>)}
      <section className="section">
        <div>
          <Carousel houses={houses} />
        </div>
      </section>
    </>
  );
};

export default Home;
