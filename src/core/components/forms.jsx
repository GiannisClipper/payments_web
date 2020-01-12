import React from 'react';

import {
    GroupFormButtons,
    GroupCreateButtons,
    GroupRetrieveButtons,
    GroupUpdateButtons,
    GroupDeleteButtons,
} from '../../core/components/groups.jsx';

// --- --- --- --- --- --- --- --- ---

export const Form = ({namespace, title, mode, hostArgs, GroupInputs, GroupButtons}) => {

    mode = mode?mode.toLowerCase():'';

    return (
        <div className={`form form_${namespace} ${mode}`}>
            <div className='title'>
                {title}
            </div>

            <GroupInputs
                namespace = {namespace}
            />

            <GroupButtons
                namespace = {namespace}
                hostArgs = {hostArgs} 
            />
        </div>
    )
}

export const CRUDForm = ({namespace, title, mode, hostArgs, GroupInputs}) => (

    <Form
        namespace = {namespace}
        title = {title}
        mode = {mode}
        hostArgs = {hostArgs}
        GroupInputs = {GroupInputs}
        GroupButtons={
            mode === 'CREATE'?GroupCreateButtons:
            mode === 'RETRIEVE'?GroupRetrieveButtons:
            mode === 'UPDATE'?GroupUpdateButtons:
            mode === 'DELETE'?GroupDeleteButtons:
            GroupFormButtons
        } 
    />
)
