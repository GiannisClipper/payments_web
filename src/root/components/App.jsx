import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';

import Payments from './Payments.jsx';

import { MappedFundsForm } from '../../funds/containers.js';

import Genres from './Genres.jsx';

import NavTabUsers from './NavTabUsers.jsx';

import { 
	MappedSignupForm,
	MappedSigninForm,
	MappedSignoutForm,
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
				<Route path='/funds' component={MappedFundsForm} />
				<Route path='/users' component={NavTabUsers} />
				<Route path='/signup' component={MappedSignupForm} />
				<Route path='/signin' component={MappedSigninForm} />
				<Route path='/signout' component={MappedSignoutForm} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
