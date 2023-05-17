import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHouse } from '../redux/house/house';
import House from '../componenets/house/House';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const houses = useSelector((state) => state.housesSlice.houses);
  const fetchStatus = useSelector((state) => state.housesSlice.status);
  useEffect(() => {
    dispatch(fetchHouse());
  }, [houses, dispatch]);

  return (
    <>
      {houses?.length ===0 && (<p className="flex-center empty-list">No Houses: List Empty</p>)}
      <ul className='column'>
        {houses.map((house) => (
            <li key={house.id}>
              <Link className="flex-center legend">
                <House data={house}/>
              </Link>
            </li>
        )) }
      </ul>
    <section className="section">
      <Carousel showArrows autoFocus centerMode>
        {houses.map((house) => (
          <div key={house.id}>
            <img src={house.picture_url} alt="" className="caroselImage" />
            <button type="button" className="legend" onClick={() => navigate('/HouseDetails', { state: { house } })}>
              See Details
            </button>
          </div>
        )) }
      </Carousel>
    </section>
  </>
  );
};

export default Home;
