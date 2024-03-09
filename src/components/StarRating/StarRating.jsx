import React from 'react';
import { StarFilled16 } from '@carbon/icons-react';
// import { SkillRating } from '../Skill/styles';
import style from './StarRating.module.css';


const StarRating = ({ rating } ) => {
    const stars = [];
    let i;
    for (i=0; i<rating; i++) {
        stars[i] = <StarFilled16 />
    }

    return (
        <span className={style.SkillRating}>{stars}</span>
    )
};

export default StarRating;