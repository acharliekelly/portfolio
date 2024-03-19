import React from 'react';
import Layout from '../../components/Layout';

import style from './Work.module.css';
import pages from '../Pages.module.css';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <h4 className={pages.SectionTitle}>Work</h4>
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
              <p className={pages.Paragraph}>{work.summary}</p>
              <ul>
                {work.highlights.map((highlight, j) => (
                  <li className={pages.Detail} key={j}>
                    <span> &bull; </span>
                    {highlight}
                  </li>
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
