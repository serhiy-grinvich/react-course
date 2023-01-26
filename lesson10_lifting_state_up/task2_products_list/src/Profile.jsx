import React from 'react';
import UserForm from './UserForm';

const Profile = (props) => {
  return (
    <div className="column">
      {/* <!-- UserForm --> */}
      <UserForm userData={props.userData} onChange={(e) => props.onChange(e)} />
    </div>
  );
};
export default Profile;
