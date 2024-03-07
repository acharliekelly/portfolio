import styled from 'styled-components'
import { white, cyan, purple } from '@carbon/colors'

export const ProjectItem = styled.li`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${white};
`

export const ProjectTitle = styled.h4`
  font-weight: bold;
`

export const SkillContainer = styled.div`
  margin-top: 1.2rem;
  padding: 0.2rem;
`

export const SiteLink = styled.a`
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 2rem;
  border: 2px solid ${cyan};
  border-radius: 5px;
  background-color: rgba(13, 146, 204, 0.3);
  transition: background-color 250ms ease;

  &:hover {
    background-color: ${cyan};
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`

export const RepoLink = styled.a`
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 2rem;
  border: 2px solid ${purple};
  border-radius: 5px;
  background-color: rgba(204, 46, 164, 0.3);
  transition: background-color 250ms ease;

  &:hover {
    background-color: ${purple};
  }

  svg {
    fill: white;
    margin-left: 8px;
  }
`