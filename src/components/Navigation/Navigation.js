/* eslint-disable max-len */
import React from 'react';
import {useLocation} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const links = [
    {url: '/', title: 'Home'},
    {url: '/experiences', title: 'Experience'},
    {url: '/education', title: 'Education'},
    {url: '/skills', title: 'Skills'},
    {url: '/contact', title: 'Contact'},
  ];
  const location = useLocation();

  return (
    <div className="Navigation flex flex-col space-y-2 w-fit mx-auto">
      {links.map(function(link, i) {
        return <Link className={ `link ${location.pathname === link.url ? 'active' : ''}`} to={link.url} key={i}> {link.title} </Link>;
      })}
    </div>
  );
}

export default Navigation;
