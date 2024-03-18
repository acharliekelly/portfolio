import React from 'react';
import Layout from '../../components/Layout';
import ProjectLink from '../../components/ProjectLink/ProjectLink';
import { SectionTitle, Pill } from '../../styles';
import style from './Projects.module.css';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
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
                  <Pill key={j}>{item}</Pill>
                ))}
                <p><em>Libraries</em></p>
                <br/>
                {project.libraries.map((item, m) => (
                  <Pill key={m}>{item}</Pill>
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
