import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareArrowUpRight, faBan, faFileCode } from '@fortawesome/free-solid-svg-icons';
import style from './ProjectLink.module.css';

const ProjectLink = ({ project, linkType }) => {
  if (linkType === 'web') {
    return <SiteLink project={project} />
  } else {
    return <RepoLink project={project} />
  }
};

const SiteLink = ({ project }) => (
  <span className={style.Site}>
    {project.website ? (
      <a 
        className={style.Link} 
        href={project.website}
        target='_blank'
        rel='noopener noreferrer'
        >
        <faSquareArrowUpRight /> Site
        </a>
    ) : (
      <DisabledLink text="Pre Launch" />
    )}
  </span>
);

const RepoLink = ({ project }) => (
  <span className={style.Repo}>
    {project.repositoryUrl ? (
      <a
        className={style.Link}
        href={project.repositoryUrl}
        target='_blank'
        rel='noopener noreferrer'
      >
        <faFileCode /> Repo
      </a>
    ) : (
      <DisabledLink text="Private" />
    )}
  </span>
);

const DisabledLink = ({ text }) => (
  <span className={style.Disabled}>
      <span className={style.Link}>
        <faBan /> {text}
      </span>
  </span>
);


export default ProjectLink;

