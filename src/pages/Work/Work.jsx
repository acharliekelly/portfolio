import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Detail } from '../../styles';
// import { WorkItem, WorkTitle, JobTitle } from './styles';
import style from './Work.module.css';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <li className={style.WorkItem} key={i}>
              <h4 className={style.WorkTitle}>{work.position}</h4>
              <div>
                <p className={style.JobTitle}>{work.company}</p> <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  {work.start.year} to {work.end.year}
                </span>
              </div>
              <Paragraph>{work.summary}</Paragraph>
              <ul>
                {work.highlights.map((highlight, j) => (
                  <Detail key={j}>
                    <span> &bull; </span>
                    {highlight}
                  </Detail>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;
