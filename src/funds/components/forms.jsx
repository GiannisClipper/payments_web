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

import { NAMESPACE } from '../constants.js';

import { LABELS, HOST_ARGS } from '../../root/constants.js';

// --- --- --- --- --- --- --- --- ---

export const FundsForm = ({mode}) => {

    const name = NAMESPACE;
    const title = LABELS.MENU_FUNDS;

    return (mode === 'CREATE')?(
        <FormInMode
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivCreateMenu}
            hostArgs = {HOST_ARGS.CREATE_FUNDS}
            namespace = {NAMESPACE}
        />

    ):(mode === 'RETRIEVE')?(
        <FormInMode
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivRetrieveMenu}
            hostArgs = {HOST_ARGS.RETRIEVE_FUNDS}
            namespace = {NAMESPACE}
        />

    ):(mode === 'UPDATE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivUpdateMenu}
            hostArgs = {HOST_ARGS.UPDATE_FUNDS}
            namespace = {NAMESPACE}
        />

    ):(mode === 'DELETE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivDeleteMenu}
            hostArgs = {HOST_ARGS.DELETE_FUNDS}
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
    )
}
