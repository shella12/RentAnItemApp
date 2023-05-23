import React, { useState } from 'react';
import PropTypes from 'prop-types';

const FlashMessage = ({ message, duration }) => {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, duration);

  return visible ? <div className="flash-message">{message}</div> : null;
};

FlashMessage.propTypes = {
  message: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
};
export default FlashMessage;
