import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteFavorite, fetchFavorites } from '../redux/favorites/favoriteReducer';
import House from '../componenets/house/House';

const MyFavourites = () => {
  const listHouses = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    if (listHouses.length === 0) {
      dispatch(fetchFavorites(1));
    }
  }, []);

  const handleRemove = (houseID) => {
    dispatch(deleteFavorite({ userID: 1, houseID }));
  };

  return (
    <>
      <h1 className="flex-center">Favourites</h1>
      <ul className="flex-center wrap">
        { listHouses?.length > 0 ? listHouses.map((house) => (
          <li key={house.id} className="flex-center house-wrapper">
            <House data={house} handleRemove={handleRemove} />
          </li>
        ))
          : <p className='flex-center empty-list'>No favorites: List Empty</p>}
      </ul>
    </>
  );
};

export default MyFavourites;
