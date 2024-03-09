// components/Profile styles
import styled from 'styled-components'
import { cyan } from '@carbon/colors'


export const ProfileLink = styled.a`
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin: 1rem;
  border: 2px solid ${cyan};
  border-radius: 5px;
  background-color: rgba(14, 204, 204, 0.3);
  transition: background-color 250ms ease;

  &:hover {
    background-color: ${cyan};
  }

  svg {
    fill: white;
    margin-right: 8px;
    margin-bottom: -10px;
  }
`;
