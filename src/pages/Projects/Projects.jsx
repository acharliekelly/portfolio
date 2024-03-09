import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
// import { ProjectItem, ProjectTitle, SkillContainer, SiteLink, RepoLink } from './styles';
import style from './Projects.module.css';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <li className={style.ProjectItem} key={i}>
              <h4 className={style.ProjectTitle}>{project.name}</h4>
              <p>{project.summary}</p>
              <br/>
              <p className={style.Links}>
                {project.website && (
                  <span className={style.Site}>
                    <a className={style.Link} href={project.website} target="_blank" rel="noopener noreferrer">Site</a>
                  </span>
                )}
                {' '}
                {project.githubUrl && (
                  <span className={style.Repo}>
                    <a className={style.Link} href={project.githubUrl} target="_blank" rel="noopener noreferrer">Repo</a>
                  </span>
                )}
              </p>
              <div className={style.SkillContainer}>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </div>
              {project.images.map((image, k) => (
                <img key={k} alt={'Image '+k} src={image.resolutions.thumbnail.url} />
              ))}
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
