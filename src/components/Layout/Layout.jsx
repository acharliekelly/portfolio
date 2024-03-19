import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <div>
        <UserHeader user={user} />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
