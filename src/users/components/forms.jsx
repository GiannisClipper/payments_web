import React from 'react';

import { FormInMode } from '../../core/components/forms.jsx';

import {
    DivFormMenu,
    DivCreateMenu,
    DivRetrieveMenu,
    DivUpdateMenu,
    DivDeleteMenu,
} from '../../core/components/menus.jsx';

import {
    MappedDivInputs,
    MappedDivItems,
} from '../containers.js';

import { LABELS, HOST_ARGS } from '../../root/constants.js';

import { NAMESPACE } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const UsersForm = ({namespace, mode}) => {

    const name = namespace;
    const title = LABELS.MENU_USERS;

    return (mode === 'CREATE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivCreateMenu}
            hostArgs = {HOST_ARGS.CREATE_USERS}
            namespace = {NAMESPACE}
        />

    ):(mode === 'RETRIEVE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivRetrieveMenu}
            hostArgs = {HOST_ARGS.RETRIEVE_USERS}
            namespace = {NAMESPACE}
        />

    ):(mode === 'UPDATE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivUpdateMenu}
            hostArgs = {HOST_ARGS.UPDATE_USERS}
            namespace = {NAMESPACE}
        />

    ):(mode === 'DELETE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivDeleteMenu}
            hostArgs = {HOST_ARGS.DELETE_USERS}
            namespace = {NAMESPACE}
        />

    ):(
        <FormInMode 
            name = {name}
            mode = 'list'
            title = {title}
            MappedDivModeData = {MappedDivItems}
            DivModeMenu = {DivFormMenu}
            namespace = {NAMESPACE}
        />
    );
}
