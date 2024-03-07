import React from 'react';
import { SkillTag } from './styles';
import { skillColors } from '../../utils/lookup';


const Skill = ({ skill }) => {
    const { name, rating, yearsOfExperience } = skill;
    const color = skillColors[rating];
    return (
        <SkillTag type={color} >
            <strong>{name}</strong>
            <span> | </span>
            <em>{yearsOfExperience} yrs</em>
        </SkillTag>
    );
};

export default Skill;