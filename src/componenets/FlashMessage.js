import React, { useState } from 'react';

const FlashMessage = ({ message, duration }) => {
  const [visible, setVisible] = useState(true);

  setTimeout(() => {
    setVisible(false);
  }, duration);

  return visible ? <div>{message}</div> : null;
};

export default FlashMessage;