import React from 'react';
import Layout from '../../components/Layout';
// import Skill from '../../components/Skill';
// import { skillColors } from '../../utils/lookup';
import Skillset from '../../components/Skillset';
import { SectionTitle, Paragraph } from '../../styles';
// import { ProfileLink } from './styles';
import Profile from '../../components/Profile';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <Skillset user={user} skillType="Frontend" />
        <Skillset user={user} skillType="Backend" />
        <Skillset user={user} skillType="Testing" />
        <Skillset user={user} skillType="Tools" />
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map(profile => (
            <Profile key={profile.network} profile={profile} />
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;
