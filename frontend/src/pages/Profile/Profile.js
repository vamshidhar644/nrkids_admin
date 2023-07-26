import React, { useState } from 'react';
import { HandleMongo } from '../../helpers/HandleMongo';
import './Profile.css';

const ChangePassword = ({}) => {
  const { updatePassword } = HandleMongo();

  const [oldpassword, setOldpassword] = useState();
  const [newpassword, setNewpassword] = useState();
  const [re_password, setRepassword] = useState();

  const [error, setError] = useState();

  const handleUpdate = (e) => {
    e.preventDefault();
    // update password logic here...
    if (newpassword !== re_password) {
      setError('Not matched');
    } else {
      updatePassword(oldpassword, newpassword);
      setError('matched');
    }
  };

  return (
    <form action="" onSubmit={handleUpdate}>
      <div className="change__password">
        <h2>Change Password</h2>
        <div className="change_password__row">
          <label htmlFor="firstName" id="firstName">
            Current Password
          </label>
          <input
            className="inputBox"
            type="password"
            name="oldpassword"
            required
            onChange={(e) => setOldpassword(e.target.value)}
          />
        </div>
        <div className="change_password__row">
          <label htmlFor="lastName" id="newpassword">
            New Password
          </label>
          <input
            className="inputBox"
            type="password"
            name="lastName"
            required
            onChange={(e) => setNewpassword(e.target.value)}
          />
        </div>
        <div className="change_password__row">
          <label htmlFor="lastName" id="lastName">
            Confirm Password
          </label>
          <input
            className="inputBox"
            type="password"
            name="repassword"
            required
            onChange={(e) => setRepassword(e.target.value)}
          />
        </div>
        <button className="update__button">Update</button>
      </div>
    </form>
  );
};

export default ChangePassword;
