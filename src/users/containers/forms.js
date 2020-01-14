import { connect } from 'react-redux';

import { FormUsers } from '../components/forms.jsx';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedFormUsers = connect(
    state => ({
        mode: state[NAMESPACE].uiux.mode,
    }), 
)(FormUsers);
