import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';

import Payments from './Payments.jsx';

import { FundsContainer } from '../../funds/containers.js';

import Genres from './Genres.jsx';

import NavTabUsers from './NavTabUsers.jsx';

import { 
	SignupContainer, 
	SigninContainer,
	SignoutContainer,
} from '../../users/containers.js';


const Home = () => <div>Home</div>

const App = () => (
	<BrowserRouter>
		<div>
			<NavBar />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/payments' component={Payments} />
				<Route path='/genres' component={Genres} />
				<Route path='/funds' component={FundsContainer} />
				<Route path='/users' component={NavTabUsers} />
				<Route path='/signup' component={SignupContainer} />
				<Route path='/signin' component={SigninContainer} />
				<Route path='/signout' component={SignoutContainer} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
