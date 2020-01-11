import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NavBar } from './NavBar.jsx';

import { MappedSignupForm, MappedSigninForm, MappedSignoutForm } from '../../auth/containers.js';

import { MappedUsersForm } from '../../users/containers.js';

import { MappedFundsForm } from '../../funds/containers.js';

import { MappedGenresForm } from '../../genres/containers.js';

import Payments from './Payments.jsx';

const App = ({auth}) => {

	let key = 0;

	let welcome = [
		'Καλωσορίσατε στην εφαρμογή! Προχωρήστε σε ΣΥΝΔΕΣΗ ΧΡΗΣΤΗ',
		'ή σε ΕΓΓΡΑΦΗ ΝΕΟΥ ΧΡΗΣΤΗ αν δεν είστε ήδη εγγεγραμμένος...',
	]

	if (auth.message)
		welcome = [
			auth.message,
			'Απαιτείται εκ νέου ΣΥΝΔΕΣΗ ΧΡΗΣΤΗ...'
		];

	return (
		<BrowserRouter>
			<NavBar auth={auth} />

			{!auth.token.key?(
				<Switch>
					<Route path='/users' component={MappedUsersForm} />
					<Route path='/funds' component={MappedFundsForm} />
					<Route path='/genres' component={MappedGenresForm} />
					<Route path='/payments' component={Payments} />
					<Route path='/signout' component={MappedSignoutForm} />
				</Switch>
			):(
				<>
				<Switch>
					<Route path='/signup' component={MappedSignupForm} />
					<Route path='/signin' component={MappedSigninForm} />
				</Switch>
				<div className='welcome'>
					{welcome.map(x => (
						<div key={key++}>{x}</div>
					))}
					{(welcome = [], '')}
				</div>
				</>
			)}
		</BrowserRouter>
		)
}

export default App;
