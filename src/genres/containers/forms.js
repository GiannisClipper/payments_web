import { connect } from 'react-redux';

import { FormGenres } from '../components/forms.jsx';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---
// Forms
// --- --- --- --- --- --- --- --- ---

export const MappedFormGenres = connect(
    state => ({
        mode: state[NAMESPACE].uiux.mode,
    }),
)(FormGenres);
