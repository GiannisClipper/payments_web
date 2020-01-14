import { connect } from 'react-redux';

import { 
    SectionInputs,
    SectionList,
} from '../components/sections.jsx';

import { SectionRelated } from '../../core/components/sections.jsx';

import { onSelectRelated } from '../../core/actions.js';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const MappedSectionInputs = connect(
    state => ({
        message: state[NAMESPACE].errors.errors,
        relatedNamespace: state[NAMESPACE].uiux.relatedNamespace,
    }),
    ({})
)(SectionInputs);

export const MappedSectionList = connect(
    (state, {items}) => ({
        items: state[NAMESPACE].items,
    }),
    ({})
)(SectionList);

export const MappedSectionRelatedFund = connect(
    state => ({
        items: state[NAMESPACE].related.fund.items,
    }),
    dispatch => ({
        onSelect: id => dispatch(onSelectRelated(NAMESPACE, id)),
    })

)(SectionRelated);
