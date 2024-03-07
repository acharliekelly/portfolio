import styled from "styled-components"
import { white } from '@carbon/colors'

export const VolunteerItem = styled.li`
    margin-top: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${white};
`

export const VolunteerTitle = styled.h4`
    font-weight: bold;
`

export const JobTitle = styled.p`
    font-weight: bold;
    display: inline-block;
`

export const BulletList = styled.ul`
    list-style-type: "\1F44D"; 
    list-style-position: outside;
`;