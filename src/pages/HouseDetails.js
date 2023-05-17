import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import profilePhoto from '../assets/profilePhoto.png';
import { deleteFavorite, postFavorite } from '../redux/favorites/favoriteReducer';
import { useParams } from 'react-router-dom';

const HouseDetails = () => {
  const listHouse = useSelector(state => state.housesSlice.houses);
  const { houseId } = useParams()
  const house = listHouse.find((house) => house === houseId);
  const { id, name, 
    price, description, 
    picture_url, owner_name
  } = house;

  const listFavorite = useSelector((state) => state.favorite.favorites);
  const [isFavorite, setIsFavorite] = useState(listFavorite.some((item) => item.id === id));

  const dispatch = useDispatch();
  const handleAddFavorite = () => {
    dispatch(postFavorite({ userID: 1, house }));
    setIsFavorite(true);
  };

  const handleRemove = () => {
    dispatch(deleteFavorite({ userID: 1, houseID: id }));
    setIsFavorite(false);
  };

  return (
    <section className="column details-section">
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
  );
};

export default HouseDetails;
