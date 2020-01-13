import { connect } from 'react-redux';

import App from './components/App.jsx';

import { NAMESPACE } from '../auth/constants.js';

export const MappedApp = connect(
    state => ({
        auth: state[NAMESPACE],
    }),
)(App);