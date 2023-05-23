import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profilePhoto from '../../assets/profilePhoto.png';
import {
  deleteFavorite, fetchFavorites, postFavorite, updateUser,
} from '../../redux/favorites/favoriteReducer';
import { fetchHouse } from '../../redux/house/house';
import Navbar from '../../componenets/navbar/Navbar';
import './house-detail.css';

const HouseDetails = () => {
  const houses = useSelector((state) => state.housesSlice.houses);
  const status = useSelector((state) => state.housesSlice.status);
  const dispatch = useDispatch();
  const { houseId } = useParams();
  const house = houses.find((item) => item.id === parseInt(houseId, 10));
  const {
    id, name,
    price, description,
  } = house || {};

  let currentUser = useSelector((state) => state.favorite.user);
  const favorites = useSelector((state) => state.favorite.favorites);
  const [isFavorite, setIsFavorite] = useState(favorites.some((item) => item.id === id));

  if (!currentUser && sessionStorage.getItem('currentUser')) {
    currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    dispatch(updateUser(currentUser));
  }

  useEffect(() => {
    if (status === 'idle' && currentUser) {
      dispatch(fetchHouse());
      dispatch(fetchFavorites(currentUser.id));
    }
  }, [dispatch, status, currentUser]);
  const handleAddFavorite = () => {
    dispatch(postFavorite({ userID: currentUser.id, house }));
    setIsFavorite(true);
  };

  const handleRemove = () => {
    dispatch(deleteFavorite({ userID: currentUser.id, houseID: id }));
    setIsFavorite(false);
  };

  return (
    <>
      <Navbar title={name} />
      <section className="section details-section">
        <img
          src={house?.picture_url}
          alt="House"
          className="caroselImage detail-house-img"
        />
        <div className="column details">
          <div className="row details-price-owner">
            <div className="row details-owner">
              <img
                src={profilePhoto}
                alt="house owner"
                className="profile-photo mob-profile-photo"
              />
              <p>{house?.owner_name}</p>
            </div>
            <p>
              $
              {price}
              <br />
              per month
            </p>
          </div>
          <div className="max-content-flex detail-description">
            <h2 className="desktop-only detail-title">{name}</h2>
            <p className="max-content-flex">{description}</p>
            {
            isFavorite ? <button type="button" className="add-favorite" onClick={handleRemove}>Remove to favourite</button>
              : <button type="button" className="add-favorite" onClick={handleAddFavorite}>Add to favourite</button>
          }
          </div>
        </div>
      </section>
    </>
  );
};

export default HouseDetails;
