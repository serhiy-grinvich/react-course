import React from 'react';
import moment from 'moment';

// const userData = {
//   firstName: 'James',
//   lastName: 'Bond',
//   birthDate: '1991-01-17T11:11:11.819Z',
//   birthPlace: 'London',
// };
const formattedBirthDate = (date) => moment(date).format('DD MMM YY');

const Profile = (props) => {
  const { firstName, lastName, birthDate, birthPlace } = props.userData;

  return (
    <div className="profile">
      <div className="profile__name">{`${firstName} ${lastName}`}</div>
      <div className="profile__birth">
        {`Was born ${formattedBirthDate(birthDate)} in `}
        <span>{`${birthPlace}`}</span>
      </div>
    </div>
  );
};

export default Profile;
