import React from 'react';
import Layout from '../../components/Layout';
import style from './Education.module.css';
import pages from '../Pages.module.css';

const Education = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <h4 className={pages.SectionTitle}>Education</h4>
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
              <p className={pages.Paragraph}>{education.description.replace('\n\n', '\n')}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Education;
