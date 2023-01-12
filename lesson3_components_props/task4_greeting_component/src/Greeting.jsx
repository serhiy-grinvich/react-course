import React from 'react';

const Greeting = ({ firstName, lastName, birthDate }) => {
  const age = new Date(Date.now() - birthDate).getFullYear() - 1970;
  // console.log(birthDate);

  return (
    <div className="greeting">{`My name is ${firstName} ${lastName}. I am ${age} years old`}</div>
  );
};

export default Greeting;
