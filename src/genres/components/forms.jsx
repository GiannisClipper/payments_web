import React from 'react';

import { CRUDForm } from '../../core/components/forms.jsx';

import { LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../constants.js';

import {
    MappedGroupInputs,
    MappedGroupItems,
} from '../containers.js';

// --- --- --- --- --- --- --- --- ---

export const GenresForm = ({mode}) => {

    return (
        <CRUDForm 
            namespace={NAMESPACE}
            title={LABELS.MENU_GENRES}
            mode={mode}
            hostArgs={
                mode === 'CREATE'?HOST_ARGS.CREATE_GENRES:
                mode === 'RETRIEVE'?HOST_ARGS.RETRIEVE_GENRES:
                mode === 'UPDATE'?HOST_ARGS.UPDATE_GENRES:
                mode === 'DELETE'?HOST_ARGS.DELETE_GENRES:
                null
            } 
            GroupInputs={
                mode === 'CREATE'?MappedGroupInputs:
                mode === 'RETRIEVE'?MappedGroupInputs:
                mode === 'UPDATE'?MappedGroupInputs:
                mode === 'DELETE'?MappedGroupInputs:
                MappedGroupItems
            }
        />
    )
}
