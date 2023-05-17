import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import House from '../componenets/house/House';
import { deleteHouse, fetchHouse } from '../redux/house/house';

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
    <section className="section">
      <h1 className="flex-center">Delete House</h1>
      {listAllHouse?.length ===0 && (<p className="flex-center empty-list">No Houses: List Empty</p>)}
      <ul className="flex-center wrap">
        { listAllHouse.map((house) => (
          <li key={house.id} className="flex-center house-wrapper">
            <House data={house} handleRemove={handleRemove} />
          </li>
        ))}
      </ul>

    </section>
  );
};

export default DeleteHouse;
