import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteFavorite, fetchFavorites, updateUser } from '../redux/favorites/favoriteReducer';
import House from '../componenets/house/House';
import Navbar from '../componenets/navbar/Navbar';

const MyFavourites = () => {
  const dispatch = useDispatch();
  let currentUser = useSelector((state) => state.favorite.user);
  const { favorites, status } = useSelector((state) => state.favorite);

  if (!currentUser && sessionStorage.getItem('currentUser')) {
    currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    dispatch(updateUser(currentUser));
  }

  useEffect(() => {
    if (status === 'idle' && currentUser) {
      dispatch(fetchFavorites(currentUser.id));
    }
  }, [dispatch, currentUser, status]);

  const handleRemove = (houseID) => {
    dispatch(deleteFavorite({ userID: currentUser.id, houseID }));
  };

  return (
    <>
      <Navbar title="List Favorites" />
      <section className="section">
        {favorites?.length === 0 && (<p className="flex-center empty-list">No Houses: List Empty</p>)}
        <ul className="flex-center wrap">
          {favorites.map((house) => (
            <li key={house.id} className="flex-center max-width house-wrapper">
              <House data={house} handleRemove={handleRemove} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default MyFavourites;
