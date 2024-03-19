import React from 'react'
import { faBriefcase, faIdCard, faHandsHelping, faGraduationCap, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/">
          <NavButton
            hasIconOnly
            renderIcon={faIdCard}
            iconDescription="Me"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/projects">
          <NavButton
            hasIconOnly
            renderIcon={faHandshake}
            iconDescription="Projects"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/work">
          <NavButton
            hasIconOnly
            renderIcon={faBriefcase}
            iconDescription="Work"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/volunteer">
          <NavButton 
            hasIconOnly
            renderIcon={faHandsHelping}
            iconDescription="Volunteer"
            tooltipPosition="bottom"
          />
        </NavLink>
        <NavLink to="/education">
          <NavButton
            hasIconOnly
            renderIcon={faGraduationCap}
            iconDescription="Education"
            tooltipPosition="bottom"
          />
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav
