import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
    );
};

export default NavTabUsers;
