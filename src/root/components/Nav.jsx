import React from 'react';

import { NavLink } from 'react-router-dom';

import { LABELS } from '../constants.js';

export const Nav = ({auth}) => {
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
}

const NavTab = props => {
    const activeStyle = {
        color: 'orange',
        fontWeight: 'bold'
    };

    const navStyle = {
        color: 'green',
        margin: '10px'
    };

    return (
        <NavLink style={navStyle} activeStyle={activeStyle} to={props.to}>
            {props.label}
        </NavLink>
    )
}

/*import { Switch, Route } from 'react-router-dom';
import Users from './Users.jsx';

const CurrentUser = () => <div>CurrentUser</div>
const UsersById = (props) => <div>UsersById {props.match.params.id}</div>

const NavTabUsers = (props) => {
	return (
        <Switch>
            <Route exact path={props.match.url} component={Users} /> 
            <Route exact path='/users/current' component={CurrentUser} />
            <Route exact path='/users/:id' component={UsersById} />
        </Switch>
    )
}*/