import { useLocation } from 'react-router-dom';
import profilePhoto from '../assets/profilePhoto.png';

const HouseDetails = () => {
  const location = useLocation();
  const { house } = location.state;
  return (
    <section className="column details-section">
      <div className="row details-bar">
        <a href="/">back</a>
        <h1>{house.name}</h1>
      </div>
      <img src={house.picture} alt="House" className="caroselImage detail-house-img" />
      <div className="column details">
        <div className="row details-price-owner">
          <div className="row details-owner">
            <img src={profilePhoto} alt="house owner" className="profile-photo mob-profile-photo" />
            <p>{house.owner_name}</p>
          </div>
          <p>
            $
            {house.price}
            <br />
            per month
          </p>
        </div>
        <p>{house.description}</p>
        <button type="button" className="add-faourite">Add to favourite</button>
      </div>
    </section>
  );
};

export default HouseDetails;
