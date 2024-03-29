import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
// import { EducationItem, Institution, Degree } from './styles';
import style from './Education.module.css';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <li className={style.EducationItem} key={i}>
              <h4 className={style.Institution}>{education.position}</h4>
              <div>
                <p className={style.Degree}>
                  {education.studyType}, {education.area}
                </p>{' '}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <Paragraph>{education.description.replace('\n\n', '\n')}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
