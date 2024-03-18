import React from 'react';
import { Launch20, RepoSourceCode20, InformationDisabled20 } from '@carbon/icons-react';
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
        <Launch20 /> Site
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
        <RepoSourceCode20 /> Repo
      </a>
    ) : (
      <DisabledLink text="Private" />
    )}
  </span>
);

const DisabledLink = ({ text }) => (
  <span className={style.Link}>
    <InformationDisabled20 /> {text}
  </span>
);


export default ProjectLink;

