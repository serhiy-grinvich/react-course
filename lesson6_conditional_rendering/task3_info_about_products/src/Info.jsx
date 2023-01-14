import React from 'react';

const Info = ({ message }) => {
  if (!message) return null;
  return <div className="message">{message}</div>;
};

export default Info;
