import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

import style from './StarRating.module.css';


const StarRating = ({ rating } ) => {
    const stars = [];
    let i;
    for (i=0; i<rating; i++) {
        stars[i] = <FontAwesomeIcon icon={faStar} />
    }

    return (
        <span className={style.SkillRating}>{stars}</span>
    )
};

export default StarRating;