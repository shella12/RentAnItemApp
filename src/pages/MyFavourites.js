import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from "react";
import { fetchFavorites } from '../redux/favorites/favoriteReducer';

const MyFavourites = () => {
  const listFavorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    if (listFavorites.length === 0) {
      dispatch(fetchFavorites(1));
    }
  }, [dispatch, listFavorites]);

  return (
  <>
    <h1>MyFavourites Page</h1>
    <form className="row">
      <input type="text" placeholder="House Name" />
      <input type="submit" placeholder="Add favorite" />
    </form>
    <ul>
      <li>House Static</li>
      { listFavorites?.length > 0 ? listFavorites.map((favorite) => (
        <li key={favorite.id} className='row'>
          <p>{favorite.name}</p>
          <form>
            <input type="submit" value="Delete" />
          </form>
        </li>
        ))
        : <p>No favorites: List Empty</p>
      }
    </ul>
  </>
)};

export default MyFavourites;
