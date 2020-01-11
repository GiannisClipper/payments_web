import React from 'react';

import { CRUDForm } from '../../core/components/forms.jsx';

import { LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../constants.js';

import {
    MappedGroupInputs,
    MappedGroupItems,
} from '../containers.js';

// --- --- --- --- --- --- --- --- ---

export const UsersForm = ({mode}) => {

    return (
        <CRUDForm 
            namespace={NAMESPACE}
            title={LABELS.MENU_USERS}
            mode={mode}
            hostArgs={
                mode === 'CREATE'?HOST_ARGS.CREATE_USERS:
                mode === 'RETRIEVE'?HOST_ARGS.RETRIEVE_USERS:
                mode === 'UPDATE'?HOST_ARGS.UPDATE_USERS:
                mode === 'DELETE'?HOST_ARGS.DELETE_USERS:
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
