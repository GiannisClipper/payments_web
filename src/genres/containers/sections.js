import { connect } from 'react-redux';

import { 
    SectionInputs,
    SectionList,
} from '../components/sections.jsx';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedSectionInputs = connect(
    state => ({
        message: state[NAMESPACE].errors.errors,
        related: {
            namespace: state[NAMESPACE].uiux.related.namespace,
            allowRequest: state[NAMESPACE].uiux.related.allowRequest,
        },
        data: {fund: {id: state[NAMESPACE].data.fund.id}},
    }),
)(SectionInputs);

export const MappedSectionList = connect(
    state => ({
        items: state[NAMESPACE].items,
    }),
)(SectionList);
