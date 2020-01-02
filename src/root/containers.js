import { connect } from 'react-redux';

import App from './components/App.jsx';

export const MappedApp = connect(
    state => ({
        auth: state['auth'],
    }), 
    ({})
)(App);