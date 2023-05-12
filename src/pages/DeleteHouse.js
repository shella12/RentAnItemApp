import { useDispatch, useSelector } from 'react-redux';
import House from '../componenets/house/House';
import { deleteHouse } from '../redux/house/house';

const DeleteHouse = () => {
  const listAllHouse = useSelector((state) => state.housesSlice.houses);

  const dispatch = useDispatch();
  const handleRemove = (house_id) => {
    dispatch(deleteHouse(house_id));
  }
  return (
    <>
      <h1 className="flex-center">Delete House</h1>

      <ul className="row wrap">
        { listAllHouse?.length > 0 ? listAllHouse.map((house) => (
          <li key={house.id} className="flex-center house-wrapper">
            <House data={house} handleRemove={handleRemove} />
          </li>
        ))
          : <p>No Houses: List Empty</p>}
      </ul>

    </>
  );
};

export default DeleteHouse;
