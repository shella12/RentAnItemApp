import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import profilePhoto from '../assets/profilePhoto.png';
import { deleteFavorite, fetchFavorites, postFavorite } from '../redux/favorites/favoriteReducer';
import { useParams } from 'react-router-dom';
import { fetchHouse } from '../redux/house/house';
import Navbar from '../componenets/navbar/Navbar';

const HouseDetails = () => {
  const houses = useSelector(state => state.housesSlice.houses);
  const status = useSelector(state => state.housesSlice.status);
  const { houseId } = useParams()
  const house = houses.find((item) => item.id == houseId);
  const { id, name, 
    price, description, 
    picture_url, owner_name
  } = house || {};;

  const favorites = useSelector((state) => state.favorite.favorites);
  const [isFavorite, setIsFavorite] = useState(favorites.some((item) => item.id === id));

  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchHouse());
      dispatch(fetchFavorites(1));
    }
  });
  const handleAddFavorite = () => {
    dispatch(postFavorite({ userID: 1, house }));
    setIsFavorite(true);
  };

  const handleRemove = () => {
    dispatch(deleteFavorite({ userID: 1, houseID: id }));
    setIsFavorite(false);
  };

  return (
    <>
    <Navbar title={name} />
    <section className="section column details-section">
      <div className="row details-bar">
        <a href="/">back</a>
        <h1>{name}</h1>
      </div>
      <img src={picture_url} alt="House" className="caroselImage detail-house-img" />
      <div className="column details">
        <div className="row details-price-owner">
          <div className="row details-owner">
            <img src={profilePhoto} alt="house owner" className="profile-photo mob-profile-photo" />
            <p>{owner_name}</p>
          </div>
          <p>
            $
            {price}
            <br />
            per month
          </p>
        </div>
        <p>{description}</p>
        {
          isFavorite ? <button type="button" className="add-favorite" onClick={handleRemove}>Remove to favourite</button>
            : <button type="button" className="add-favorite" onClick={handleAddFavorite}>Add to favourite</button>
        }
      </div>
    </section>
    </>
  );
};

export default HouseDetails;
