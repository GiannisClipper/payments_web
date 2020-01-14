import { connect } from 'react-redux';

import { NAMESPACE } from '../constants.js';

import { FormFunds } from '../components/forms.jsx';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedFormFunds = connect(
    state => ({
        namespace: NAMESPACE,
        mode: state[NAMESPACE].uiux.mode,
    }), 
)(FormFunds);

