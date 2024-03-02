import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent, BaseLayout } from './styles';

const Layout = ({ user, children }) => {
    return (
        <BaseLayout>
            <MobileNav />
            <Sidebar />
            <StyledContent>
                <UserHeader user={user} />
                <div>{children}</div>
            </StyledContent>
        </BaseLayout >
    );
};

export default Layout;