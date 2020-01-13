import { connect } from 'react-redux';

import { UsersForm } from '../components/forms.jsx';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedUsersForm = connect(
    state => ({
        mode: state[NAMESPACE].uiux.mode,
    }), 
)(UsersForm);
