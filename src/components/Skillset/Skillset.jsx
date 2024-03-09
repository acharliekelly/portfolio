import React from 'react';

import style from './Skillset.module.css';


const Skillset = ({ user, minRating, minExp, skillType }) => {
  let skills = user.skills;

  if (skillType) {
    skills = user.skills.filter((sk) => sk.keywords.includes(skillType));
  } else if (minRating) {
    skills = user.skills.filter((sk) => sk.rating >= minRating);
  } else if (minExp) {
    skills = user.skills.filter((sk) => sk.yearsOfExperience >= minExp);
  }
  return (
    <div className={style.SkillContainer}>
      <span className={style.ContainerTitle}>{skillType}</span>
      <ul className={style.Matrix}>
        {skills.map((skill) => (
          <li 
            className={style[skill.level]} 
            title={`${skill.level}: ${skill.yearsOfExperience} yrs`}>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skillset;