import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteFavorite, fetchFavorites } from '../redux/favorites/favoriteReducer';
import House from '../componenets/house/House';
import Navbar from '../componenets/navbar/Navbar';

const MyFavourites = () => {
  const currentUser = useSelector((state) => state.favorite.user);
  const { favorites, status } = useSelector((state) => state.favorite);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(currentUser)
    if (status === 'idle') {
      dispatch(fetchFavorites(currentUser.id));
    }
  });

  const handleRemove = (houseID) => {
    dispatch(deleteFavorite({ userID: currentUser.id, houseID }));
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
