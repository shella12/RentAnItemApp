import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteFavorite, fetchFavorites } from '../redux/favorites/favoriteReducer';
import House from '../componenets/house/House';

const MyFavourites = () => {
  const listHouses = useSelector((state) => state.favorite.favorites);
  const status = useSelector((state) => state.favorite.status);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFavorites(1));
    }
  });

  const handleRemove = (houseID) => {
    dispatch(deleteFavorite({ userID: 1, houseID }));
  };

  return (
    <>
      <h1 className="flex-center">Favourites</h1>
      {listHouses?.length ===0 && (<p className="flex-center empty-list">No Houses: List Empty</p>)}
      <ul className="flex-center wrap">
        {listHouses.map((house) => (
          <li key={house.id} className="flex-center house-wrapper">
            <House data={house} handleRemove={handleRemove} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default MyFavourites;
