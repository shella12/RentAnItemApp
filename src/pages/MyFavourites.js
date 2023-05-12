import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { deleteFavorite, fetchFavorites, postFavorite } from '../redux/favorites/favoriteReducer';
import House from '../componenets/house/House';

const MyFavourites = () => {
  const [houseID, setHouseID] = useState();
  const listHouses = useSelector((state) => state.favorite.favorites);
  const listAllHouse = useSelector((state) => state.housesSlice.houses);
  const dispatch = useDispatch();
  useEffect(() => {
    if (listHouses.length === 0) {
      dispatch(fetchFavorites(1));
    }
  }, [dispatch, listHouses]);
  

  const handleAddFavorite = (event) => {
    event.preventDefault();
    const house = listAllHouse.find(({ id }) => id === parseInt(houseID, 10));
    dispatch(postFavorite({ userID: 1, house }));
  };

  const handleRemove = (event, houseID) => {
    event.preventDefault();

    dispatch(deleteFavorite({ userID: 1, houseID }));
  };

  return (
    <>
      <h1 className="flex-center">Favourites</h1>
      <ul className="row wrap">
        { listHouses?.length > 0 ? listHouses.map((house) => (
          <li key={house.id} className="flex-center house-wrapper">
            <House data={house} />
          </li>
        ))
          : <p>No favorites: List Empty</p>}
      </ul>

      {/* Part below is need to test add/delete favorite */}
      <form className="row" onSubmit={(e) => handleAddFavorite(e)}>
        <input type="text" placeholder="House ID" onChange={(e) => setHouseID(e.currentTarget.value)} />
        <input type="submit" placeholder="Add favorite" />
      </form>
      <ul>
        <li>House Static</li>
        { listHouses?.length > 0 ? listHouses.map((house) => (
          <li key={house.id} className="row">
            <p>
              {house.name}
              #
              {house.id}
            </p>
            <form onSubmit={(e) => handleRemove(e, house.id)}>
              <input type="submit" value="Delete" />
            </form>
          </li>
        ))
          : <p>No favorites: List Empty</p>}
      </ul>
    </>
  );
};

export default MyFavourites;
