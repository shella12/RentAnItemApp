import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteFavorite, fetchFavorites } from '../redux/favorites/favoriteReducer';
import House from '../componenets/house/House';
import Navbar from '../componenets/navbar/Navbar';

const MyFavourites = () => {
  const { favorites, status } = useSelector((state) => state.favorite);
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
      <Navbar title="My Favorites" />
      <section className="section">
        {favorites?.length === 0 && (<p className="flex-center empty-list">No Houses: List Empty</p>)}
        <ul className="flex-center wrap">
          {favorites.map((house) => (
            <li key={house.id} className="flex-center house-wrapper">
              <House data={house} handleRemove={handleRemove} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MyFavourites;
