import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { MappedNav } from '../containers/nav.js';

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
            <div className='containerH'>
			<div className='containerV'>
			<div className='main'>
			{auth.token.key?(
				<Switch>
					<Route exact path='/' component={MappedNav} />
					<Route path='/users' component={MappedFormUsers} />
					<Route path='/funds' component={MappedFormFunds} />
					<Route path='/genres' component={MappedFormGenres} />
					<Route path='/payments' component={MappedFormPayments} />
					<Route path='/signout' component={MappedFormSignout} />
					<Route render={() => (<Redirect to={{pathname: '/'}} />)} />
				</Switch>

			):(
				<>
				<Switch>
					<Route path='/signup' component={MappedFormSignup} />
					<Route path='/signin' component={MappedFormSignin} />
					<Route path='/' component={MappedNav} />
				</Switch>
				<div className='welcome'>
					{welcome.map(x => (
						<div key={key++}>{x}</div>
					))}
					{(welcome = [], '')}
				</div>
				</>
			)}
			</div>
			</div>
			</div>
		</BrowserRouter>
	)
}

export default App;
