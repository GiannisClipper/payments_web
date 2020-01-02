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


//const Home = () => <App />

const App = ({auth}) => {

	let welcome = [
		'Καλωσορίσατε στην εφαρμογή! Προχωρήστε σε ΣΥΝΔΕΣΗ ΧΡΗΣΤΗ',
		'ή σε ΕΓΓΡΑΦΗ ΝΕΟΥ ΧΡΗΣΤΗ αν δεν είστε ήδη εγγεγραμμένος...',
	]

	if (auth.message)
		welcome = [
			auth.message,
			'Απαιτείται εκ νέου ΣΥΝΔΕΣΗ ΧΡΗΣΤΗ...'
		]

	return (
		<BrowserRouter>
			<NavBar auth={auth} />

			{auth.token.key?(
				<Switch>
					<Route path='/payments' component={Payments} />
					<Route path='/genres' component={Genres} />
					<Route path='/funds' component={MappedFundsForm} />
					<Route path='/users' component={NavTabUsers} />
					<Route path='/signout' component={MappedSignoutForm} />
				</Switch>
			):(
				<Switch>
					<Route path='/signup' component={MappedSignupForm} />
					<Route path='/signin' component={MappedSigninForm} />
					<div className='welcome'>
						{welcome.map(x => (
							<div>{x}</div>
						))}
					</div>

				</Switch>
			)}
		</BrowserRouter>
		);
};

export default App;
