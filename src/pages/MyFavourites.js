import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteFavorite, fetchFavorites, postFavorite } from '../redux/favorites/favoriteReducer';
import House from '../componenets/house/House';

const MyFavourites = () => {
  //const [houseID, setHouseID] = useState();
  const listHouses = useSelector((state) => state.favorite.favorites);
  //const listAllHouse = useSelector((state) => state.housesSlice.houses);
  const dispatch = useDispatch();
  useEffect(() => {
    if (listHouses.length === 0) {
      dispatch(fetchFavorites(1));
    }
  }, [dispatch, listHouses]);

  const handleRemove = (houseID) => {
    dispatch(deleteFavorite({ userID: 1, houseID }));
  };

  return (
    <>
      <h1 className="flex-center">Favourites</h1>
      <ul className="row wrap">
        { listHouses?.length > 0 ? listHouses.map((house) => (
          <li key={house.id} className="flex-center house-wrapper">
            <House data={house} handleRemove={handleRemove} />
          </li>
        ))
          : <p>No favorites: List Empty</p>}
      </ul>
    </>
  );
};

export default MyFavourites;
