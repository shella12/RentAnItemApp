import { useDispatch, useSelector } from 'react-redux';
import House from '../componenets/house/House';
import { deleteHouse, fetchHouse } from '../redux/house/house';
import { useEffect } from 'react';

const DeleteHouse = () => {
  const listAllHouse = useSelector((state) => state.housesSlice.houses);
  const dispatch = useDispatch();
  useEffect(() => {
    if (listAllHouse.length === 0) {
      dispatch(fetchHouse());
    }
  }, []);
  const handleRemove = (houseID) => {
    dispatch(deleteHouse(houseID));
  };
  return (
    <>
      <h1 className="flex-center">Delete House</h1>

      <ul className="row wrap">
        { listAllHouse?.length > 0 ? listAllHouse.map((house) => (
          <li key={house.id} className="flex-center house-wrapper">
            <House data={house} handleRemove={handleRemove} />
          </li>
        ))
          : <p className='flex-center empty-list'>No Houses: List Empty</p>}
      </ul>

    </>
  );
};

export default DeleteHouse;
