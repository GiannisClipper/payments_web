import { connect } from 'react-redux';

import { InputStringId } from '../components/inputs.jsx';

// --- --- --- --- --- --- --- --- ---

export const MappedInputStringId = connect(
    (state, {namespace}) => ({
        value: state[namespace].data.id,
    }),
)(InputStringId);
