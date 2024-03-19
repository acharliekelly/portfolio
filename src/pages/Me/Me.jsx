import React from 'react';
import Layout from '../../components/Layout';
import Skillset from '../../components/Skillset';
import Profile from '../../components/Profile';
import style from '../Pages.module.css';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <h3 className={style.SectionTitle}>About Me</h3>
        <p className={style.Paragraph}>{user.basics.summary}</p>
      </div>
      <div>
        <h3 className={style.SectionTitle}>Skills</h3>
        <Skillset user={user} skillType="Frontend" />
        <Skillset user={user} skillType="Backend" />
        <Skillset user={user} skillType="Testing" />
        <Skillset user={user} skillType="Tools" />
      </div>
      <div>
        <h3 className={style.SectionTitle}>Profiles</h3>
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
