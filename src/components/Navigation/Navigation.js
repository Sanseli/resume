import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="Navigation flex flex-col space-y-2">
      <Link className='link' to="/"> Home </Link>
      <Link className='link' to="/skills"> Skills </Link>
      <Link className='link' to="/experiences"> Experiences </Link>
      <Link className='link' to="/contact"> Contact </Link>
    </div>
  );
}

export default Navigation;
