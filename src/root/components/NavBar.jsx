import React from 'react';
import NavTab from './NavTab.jsx';

const NavBar = ({mode}) => {
	return (
		(mode === 'authenticated')?(
			<div>
			<NavTab to='/' label='HOME' />
			<NavTab to='/payments' label='PAYMENTS' />
			<NavTab to='/genres' label='GENRES' />
			<NavTab to='/funds' label='FUNDS' />
			<NavTab to='/users' label='USERS' />
			<NavTab to='/signout' label='SIGNOUT' />
			</div>
		):(
			<div>
			<NavTab to='/' label='HOME' />
			<NavTab to='/signup' label='SIGNUP' />
			<NavTab to='/signin' label='SIGNIN' />
			</div>
		)
	)
};

export default NavBar