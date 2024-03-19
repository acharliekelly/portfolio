import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';
import style from './Profile.module.css';

const Profile = ({ profile, iconSvg }) => {
  const { network, username, url } = profile;

  return (
    <a className={style.profile}
      href={url}
      target="_blank" 
      rel="noreferrer noopener"
      title={username}
      >
        {iconSvg || (
        <FontAwesomeIcon icon={faIdCard} />
      )}
        {network}</a> 
  );
};

export default Profile;