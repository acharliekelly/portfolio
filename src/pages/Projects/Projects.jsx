import React from 'react';
import Layout from '../../components/Layout';
import ProjectLink from '../../components/ProjectLink/ProjectLink';
import style from './Projects.module.css';
import pages from '../Pages.module.css';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <h3 className={pages.SectionTitle}>Projects</h3>
        <ul>
          {user.projects.map((project, i) => (
            <li className={style.ProjectItem} key={i}>
              <h4 className={style.ProjectTitle}>{project.displayName}</h4>
              <p>{project.summary}</p>
              <br/>
              {project.images.map((image, k) => (
                <img key={k} alt={'Image '+k} src={image.resolutions.thumbnail.url} />
              ))}
              <p className={style.Links}>
                <ProjectLink project={project} linkType='web' />
                <ProjectLink project={project} linkType='repo' />
              </p>
              <div className={style.SkillContainer}>
                <p><em>Languages</em></p>
                <br/>
                {project.languages.map((item, j) => (
                  <span className={pages.Pill} key={j}>{item}</span>
                ))}
                <p><em>Libraries</em></p>
                <br/>
                {project.libraries.map((item, m) => (
                  <span className={pages.Pill} key={m}>{item}</span>
                ))}
              </div>
              
              
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
