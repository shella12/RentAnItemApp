import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import profilePhoto from '../assets/profilePhoto.png';
import { deleteFavorite, postFavorite } from '../redux/favorites/favoriteReducer';

const HouseDetails = () => {
  const location = useLocation();
  const { house } = location.state;
  const {
    name, price, description, picture,
  } = house;

  const listFavorite = useSelector((state) => state.favorite.favorites);
  const [isFavorite, setIsFavorite] = useState(listFavorite.some((item) => item.id === house.id));

  const dispatch = useDispatch();
  const handleAddFavorite = () => {
    dispatch(postFavorite({ userID: 1, house }));
    setIsFavorite(true);
  };

  const handleRemove = (houseID) => {
    dispatch(deleteFavorite({ userID: 1, houseID }));
    setIsFavorite(false);
  };

  return (
    <section className="column details-section">
      <div className="row details-bar">
        <a href="/">back</a>
        <h1>{name}</h1>
      </div>
      <img src={picture} alt="House" className="caroselImage detail-house-img" />
      <div className="column details">
        <div className="row details-price-owner">
          <div className="row details-owner">
            <img src={profilePhoto} alt="house owner" className="profile-photo mob-profile-photo" />
            <p>{house.owner_name}</p>
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
  );
};

export default HouseDetails;
