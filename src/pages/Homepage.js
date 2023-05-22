import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '../componenets/Carousel';
import { fetchHouse } from '../redux/house/house';
import Navbar from '../componenets/navbar/Navbar';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const { houses } = useSelector((state) => state.housesSlice);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchHouse());
  }, [dispatch]);

  const handleLogout = useCallback(() => {
    axios
      .delete('http://localhost:3000/logout', { withCredentials: true })
      .then(() => {
        navigate('/login'); // Redirect to the "Houses" page after successful logout
      })
      .catch((error) => {
        console.log('logout error', error);
      });
  }, [navigate]);

  return (
    <>
      <Navbar title="Houses" handleLogout={handleLogout} />

      {houses?.length === 0 && (<p className="flex-center empty-list">No Houses: List Empty</p>)}
      <section className="section home-section">
        <Carousel houses={houses} />
      </section>
    </>
  );
};

export default Home;
