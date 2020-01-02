import React from 'react';

import NavTab from './NavTab.jsx';

import { LABELS } from '../constants.js';

const NavBar = ({auth}) => {
	return (
		auth.token.key?(
			<div>
			<NavTab label={LABELS.MENU_USERS} to='/users' />
			<NavTab label={LABELS.MENU_FUNDS} to='/funds' />
			<NavTab label={LABELS.MENU_GENRES} to='/genres' />
			<NavTab label={LABELS.MENU_PAYMENTS} to='/payments' />
			<NavTab label={LABELS.MENU_SIGNOUT} to='/signout' />
			</div>
		):(
			<div>
			<NavTab label={LABELS.MENU_SIGNUP} to='/signup' />
			<NavTab label={LABELS.MENU_SIGNIN} to='/signin' />
			</div>
		)
	)
};

export default NavBar