import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NavBar } from './NavBar.jsx';

import { MappedFormSignup, MappedFormSignin, MappedFormSignout } from '../../auth/containers/forms.js';

import { MappedFormUsers } from '../../users/containers/forms.js';

import { MappedFormFunds } from '../../funds/containers/forms.js';

import { MappedFormGenres } from '../../genres/containers/forms.js';

import { MappedFormPayments } from '../../payments/containers/forms.js';

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

			{auth.token.key?(
				<Switch>
					<Route path='/users' component={MappedFormUsers} />
					<Route path='/funds' component={MappedFormFunds} />
					<Route path='/genres' component={MappedFormGenres} />
					<Route path='/payments' component={MappedFormPayments} />
					<Route path='/signout' component={MappedFormSignout} />
				</Switch>

			):(
				<>
				<Switch>
					<Route path='/signup' component={MappedFormSignup} />
					<Route path='/signin' component={MappedFormSignin} />
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
