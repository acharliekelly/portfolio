import React from 'react';


const Skill = ({ skill }) => {
    const { name, rating, yearsOfExperience } = skill;
    // const color = skillColors[rating];
    return (
        <div>
            <strong>{name}</strong>
            <span> | {rating} | </span>
            <em>{yearsOfExperience} yrs</em>
        </div>
    );
};

export default Skill;