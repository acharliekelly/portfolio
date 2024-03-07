import React from 'react';
import { StarFilled16 } from '@carbon/icons-react';
import { SkillRating } from '../Skill/styles';


const StarRating = ({ rating } ) => {
    const stars = [];
    let i;
    for (i=0; i<rating; i++) {
        stars[i] = <StarFilled16 />
    }

    return (
        <SkillRating>{stars}</SkillRating>
    )
};

export default StarRating;