import { useLocation } from 'react-router-dom';
import profilePhoto from '../assets/profilePhoto.png';
import { useDispatch, useSelector } from 'react-redux';
import { postFavorite } from '../redux/favorites/favoriteReducer';
import { useState } from 'react';

const HouseDetails = () => {
  const location = useLocation();
  const { house } = location.state;
  const { name, owner_name, price, description, picture } = house;

  const listFavorite = useSelector((state) => state.favorite.favorites);
  const [isFavorite, setIsFavorite] = useState(listFavorite.inculdes(house.id));

  const dispatch = useDispatch();
  const handleAddFavorite = () => {
    dispatch(postFavorite({ userID: 1, house }));
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
        <button type="button" className="add-faourite" onClick={handleAddFavorite}>Add to favourite</button>
      </div>
    </section>
  );
};

export default HouseDetails;
