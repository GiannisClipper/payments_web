import React from 'react';

import { CRUDForm } from '../../core/components/forms.jsx';

import {
    MappedSectionInputs,
    MappedSectionList,
} from '../containers/sections.js';

import { LABELS as ROOT_LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const FundsForm = ({mode}) => (

    <CRUDForm 
        namespace={NAMESPACE}
        title={ROOT_LABELS.MENU_FUNDS}
        mode={mode}

        hostArgs={
            mode === 'CREATE'?HOST_ARGS.CREATE_FUNDS:
            mode === 'RETRIEVE'?HOST_ARGS.RETRIEVE_FUNDS:
            mode === 'UPDATE'?HOST_ARGS.UPDATE_FUNDS:
            mode === 'DELETE'?HOST_ARGS.DELETE_FUNDS:
            null
        }

        SectionData={
            mode === 'CREATE'?MappedSectionInputs:
            mode === 'RETRIEVE'?MappedSectionInputs:
            mode === 'UPDATE'?MappedSectionInputs:
            mode === 'DELETE'?MappedSectionInputs:
            MappedSectionList
        }
    />
)
