import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchUser from './gateways';

const User = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  useEffect(() => {
    fetchUser(userId).then(userData => setUser(userData));
  }, [userId]);

  if (!user) return null;
  const { name, location, avatar_url } = user;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
};
export default User;
