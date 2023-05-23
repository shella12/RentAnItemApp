import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../components/Carousel/Carousel';
import { fetchHouse } from '../redux/house/house';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.housesSlice);
  useEffect(() => {
    dispatch(fetchHouse());
  }, [dispatch]);

  return (
    <>
      <Navbar title="Houses" />

      {houses?.length === 0 && (<p className="flex-center empty-list">No Houses: List Empty</p>)}
      <section className="section home-section">
        <Carousel houses={houses} />
      </section>
    </>
  );
};

export default Home;
