import React from 'react';

import { FormCRUD } from '../../core/components/forms.jsx';

import {
    MappedSectionInputs,
    MappedSectionList,
} from '../containers/sections.js';

import { LABELS as ROOT_LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const FormGenres = ({mode}) => (

    <FormCRUD 
        namespace={NAMESPACE}
        title={ROOT_LABELS.MENU_GENRES}
        mode={mode}

        hostArgs={
            mode === 'CREATE'?HOST_ARGS.CREATE_GENRES:
            mode === 'RETRIEVE'?HOST_ARGS.RETRIEVE_GENRES:
            mode === 'UPDATE'?HOST_ARGS.UPDATE_GENRES:
            mode === 'DELETE'?HOST_ARGS.DELETE_GENRES:
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
