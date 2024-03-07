import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, SkillContainer, SiteLink, RepoLink } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <br/>
              <p>
                {project.website && (
                  <SiteLink href={project.website} target="_blank" rel="noopener noreferrer">Site</SiteLink>
                )}
                {' '}
                {project.githubUrl && (
                  <RepoLink href={project.githubUrl} target="_blank" rel="noopener noreferrer">Repo</RepoLink>
                )}
              </p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
              {project.images.map((image, k) => (
                <img key={k} alt={'Image '+k} src={image.resolutions.thumbnail.url} />
              ))}
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
