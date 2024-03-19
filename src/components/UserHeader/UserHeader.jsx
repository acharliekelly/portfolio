import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import style from './UserHeader.module.css';

const UserHeader = ({ user }) => {

  return (
    <div className={style.HeaderContainer}>
      <div className={style.Header}>
        <img className={style.AvatarImage} src={user.basics.picture} alt="Avatar" />
        <div>
          <h2>{user.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4>
          <p>{user.basics.label}</p>
          <p>Coding in {user.basics.region}</p>
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>{user.basics.headline}</p>
        </div>
      </div>
      <div>
        <a className={style.ViewResumeLink}
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <faArrowRight />
        </a>
      </div>
    </div>
  );
};

export default UserHeader;
