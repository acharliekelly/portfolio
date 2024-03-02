import React from 'react';
import { FaceCool32, Code32, Portfolio32, Education32, HealthCross32, Collaborate32 } from '@carbon/icons-react';

import { Container, Spacer, NavWrapper, NavButton, NavLink } from './styles';

const MobileNav = () => {
    return (
        <Container>
            <Spacer />
            <NavWrapper>
                <NavLink to="/">
                    <NavButton 
                        hasIconOnly
                        renderIcon={FaceCool32}
                        iconDescription="Me"
                        tooltipPosition="bottom"
                    />
                </NavLink>
                <NavLink to="/projects">
                    <NavButton 
                        hasIconOnly
                        renderIcon={Collaborate32}
                        iconDescription="Projects"
                        tooltipPosition="bottom"
                    />
                </NavLink>
                <NavLink to="/work">
                    <NavButton 
                        hasIconOnly
                        renderIcon={Portfolio32}
                        iconDescription="Work"
                        tooltipPosition="bottom"
                    />
                </NavLink>
                <NavLink to="/volunteer">
                    <NavButton 
                        hasIconOnly
                        renderIcon={HealthCross32}
                        iconDescription="Volunteer"
                        tooltipPosition="bottom"
                    />
                </NavLink>
                <NavLink to="/education">
                    <NavButton 
                        hasIconOnly
                        renderIcon={Education32}
                        iconDescription="Education"
                        tooltipPosition="bottom"
                    />
                </NavLink>
                <NavLink to="/skills">
                    <NavButton 
                        hasIconOnly
                        renderIcon={Code32}
                        iconDescription="Skills"
                        tooltipPosition="bottom"
                    />
                </NavLink>
            </NavWrapper>
        </Container>
    );
};