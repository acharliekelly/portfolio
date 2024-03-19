import React from 'react';
import { Link } from 'react-router-dom';
import { faBriefcase, faIdCard, faHandsHelping, faGraduationCap, faHandshake } from '@fortawesome/free-solid-svg-icons';
import style from './MobileNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MobileNav = () => {
  return (
    <div className={style.Container}>
      <span className={style.Spacer} />
      <nav className={style.NavWrapper}>
        <Link to="/">
          <span className={style.NavButton}>
            <FontAwesomeIcon icon={faIdCard} title="Me" />
          </span>
        </Link>
        <Link to="/projects">
          <span className={style.NavButton}>
            <FontAwesomeIcon icon={faHandshake} title="Projects" />
          </span>  
        </Link>
        <Link to="/work">
          <span className={style.NavButton}>
            <FontAwesomeIcon icon={faBriefcase} title="Work" />
          </span>
        </Link>
        <Link to="/volunteer">
          <span className={style.NavButton}> 
            <FontAwesomeIcon icon={faHandsHelping} title="Volunteer" />
          </span>
        </Link>
        <Link to="/education">
          <span className={style.NavButton}>
          <FontAwesomeIcon icon={faGraduationCap} title="Education" />
          </span>
        </Link>
      </nav>
    </div>
  )
}

export default MobileNav
