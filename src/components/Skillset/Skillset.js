import React from 'react';

import { SkillMatrix } from './styles';
import { Tag } from 'carbon-components-react';
// import Skill from '../Skill';

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
    <SkillMatrix>
      {skills.map((skill) => (
        <Tag>
          {skill.name} | {skill.rating}
        </Tag>
      ))}
    </SkillMatrix>
  );
};

export default Skillset;