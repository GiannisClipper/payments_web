import React from 'react';

import {
    GroupFormButtons,
    GroupCreateButtons,
    GroupRetrieveButtons,
    GroupUpdateButtons,
    GroupDeleteButtons,
} from '../../core/components/groups.jsx';

// --- --- --- --- --- --- --- --- ---

export const Form = ({namespace, title, mode, hostArgs, SectionData, SectionButtons}) => {

    mode = mode?mode.toLowerCase():'';

    return (
        <div className={`form form_${namespace} ${mode}`}>
            <div className='title'>
                {title}
            </div>

            <SectionData
                namespace = {namespace}
            />

            <SectionButtons
                namespace = {namespace}
                hostArgs = {hostArgs} 
            />
        </div>
    )
}

export const FormCRUD = ({namespace, title, mode, hostArgs, SectionData}) => (

    <Form
        namespace = {namespace}
        title = {title}
        mode = {mode}
        hostArgs = {hostArgs}
        SectionData = {SectionData}
        SectionButtons={
            mode === 'CREATE'?GroupCreateButtons:
            mode === 'RETRIEVE'?GroupRetrieveButtons:
            mode === 'UPDATE'?GroupUpdateButtons:
            mode === 'DELETE'?GroupDeleteButtons:
            GroupFormButtons
        } 
    />
)
