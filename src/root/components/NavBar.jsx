import React from 'react';
import NavTab from './NavTab.jsx';

const NavBar = () => {
  return (
    <div>
      <NavTab to='/' label="HOME" />
      <NavTab to='/payments' label="PAYMENTS" />
      <NavTab to='/genres' label="GENRES" />
      <NavTab to='/funds' label="FUNDS" />
      <NavTab to='/users' label="USERS" />
      <NavTab to='/signin' label="SIGNIN" />
    </div>
  );
};

export default NavBar