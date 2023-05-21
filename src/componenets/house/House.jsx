import React from 'react';
import './house.css';
import PropTypes from 'prop-types';

const House = (props) => {
  const { data, handleRemove } = props;
  const {
    id, name, price, description,
  } = data;

  return (
    <>
      <div className="column house">
        <img src={data.picture_url} alt={`house ${name}`} />
        <div className="column house-content-wrapper">
          <div className="column max-content-flex house-content">
            <div className="row space-between">
              <h4 className="max-content-flex house-title">{name}</h4>
              <h4>
                $
                {price}
                {' '}
                <br />
                per Month
              </h4>
            </div>
            <p className="desktop-only house-description">{description}</p>
          </div>
          {
            handleRemove
            && (
            <button
              type="button"
              className="add-favorite btn-default"
              onClick={() => handleRemove(id)}
            >
              Delete
            </button>
            )
          }
        </div>
      </div>
    </>
  );
};

House.defaultProps = {
  handleRemove: () => {},
};

House.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
    picture_url: PropTypes.string,
  }).isRequired,
  handleRemove: PropTypes.func,
};

export default House;
