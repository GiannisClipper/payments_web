import React from 'react';

import { FormCRUD } from '../../core/components/forms.jsx';

import {
    MappedSectionInputs,
    MappedSectionList,
} from '../containers/sections.js';

import { LABELS as ROOT_LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const FormUsers = ({mode}) => (

    <FormCRUD 
        namespace={NAMESPACE}
        title={ROOT_LABELS.MENU_USERS}
        mode={mode}

        hostArgs={
            mode === 'CREATE'?HOST_ARGS.CREATE_USERS:
            mode === 'RETRIEVE'?HOST_ARGS.RETRIEVE_USERS:
            mode === 'UPDATE'?HOST_ARGS.UPDATE_USERS:
            mode === 'DELETE'?HOST_ARGS.DELETE_USERS:
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
