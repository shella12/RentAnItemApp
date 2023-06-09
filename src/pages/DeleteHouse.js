import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import House from '../components/house/House';
import { deleteHouse, fetchHouse } from '../redux/house/house';
import Navbar from '../components/navbar/Navbar';

const DeleteHouse = () => {
  const listAllHouse = useSelector((state) => state.housesSlice.houses);
  const fetchStatus = useSelector((state) => state.housesSlice.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus === 'idle') {
      dispatch(fetchHouse());
    }
  });
  const handleRemove = (houseID) => {
    dispatch(deleteHouse(houseID));
  };
  return (
    <>
      <Navbar title="Delete House" />
      <section className="section">
        {listAllHouse?.length === 0 && (<p className="flex-center empty-list">No Houses: List Empty</p>)}
        <ul className="flex-center column wrap">
          { listAllHouse.map((house) => (
            <li key={house.id} className="flex-center max-content-flex house-wrapper">
              <House data={house} handleRemove={handleRemove} />
            </li>
          ))}
        </ul>

      </section>
    </>
  );
};

export default DeleteHouse;
