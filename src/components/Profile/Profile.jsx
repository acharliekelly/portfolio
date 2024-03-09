import React from 'react';
import { UserAvatar32 } from '@carbon/icons-react';
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
        <UserAvatar32 />
      )}
        {network}</a> 
  );
};

export default Profile;