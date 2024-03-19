import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../../utils/lookup';
import style from './Sidebar.module.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className={style.SideNav} aria-label="Side navigation">
      <ul>
        {navigationItems.map((item, i) => (
            <Link
              isActive={
                location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
              }
              element={Link}
              to={i.path}
              key={i.name}
            >
              {i.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
