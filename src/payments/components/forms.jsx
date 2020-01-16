import React from 'react';

import { FormCRUD } from '../../core/components/forms.jsx';

import {
    MappedSectionInputs,
    MappedSectionList,
} from '../containers/sections.js';

import { LABELS as ROOT_LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const FormPayments = ({mode}) => (

    <FormCRUD 
        namespace={NAMESPACE}
        title={ROOT_LABELS.MENU_PAYMENTS}
        mode={mode}

        hostArgs={
            mode === 'CREATE'?HOST_ARGS.CREATE_PAYMENTS:
            mode === 'RETRIEVE'?HOST_ARGS.RETRIEVE_PAYMENTS:
            mode === 'UPDATE'?HOST_ARGS.UPDATE_PAYMENTS:
            mode === 'DELETE'?HOST_ARGS.DELETE_PAYMENTS:
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
