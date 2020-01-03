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

// --- --- --- --- --- --- --- --- ---

export const FundsForm = ({namespace, mode}) => {

    const name = namespace;
    const title = LABELS.MENU_FUNDS;

    return (mode === 'CREATE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivCreateMenu}
            namespace = {namespace}
            hostArgs = {HOST_ARGS.CREATE_FUNDS}
        />

    ):(mode === 'RETRIEVE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivRetrieveMenu}
            namespace = {namespace}
            hostArgs = {HOST_ARGS.RETRIEVE_FUNDS}
        />

    ):(mode === 'UPDATE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivUpdateMenu}
            namespace = {namespace}
            hostArgs = {HOST_ARGS.UPDATE_FUNDS}
        />

    ):(mode === 'DELETE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivDeleteMenu}
            namespace = {namespace}
            hostArgs = {HOST_ARGS.DELETE_FUNDS}
        />

    ):(
        <FormInMode 
            name = {name}
            mode = 'list'
            title = {title}
            MappedDivModeData = {MappedDivItems}
            DivModeMenu = {DivFormMenu}
            namespace = {namespace}
        />
    )
}
