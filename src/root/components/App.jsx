import React from 'react';
import NavBar from './NavBar.jsx';
import Payments from './Payments.jsx';
import Genres from './Genres.jsx';
import { FundsContainer } from '../../funds/containers.js';
import NavTabUsers from './NavTabUsers.jsx';
import Signin from './Signin.jsx';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
				<Route path='/signin' component={Signin} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default App;
