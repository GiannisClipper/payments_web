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

export const GenresForm = ({namespace, mode}) => {

    const name = namespace;
    const title = LABELS.MENU_GENRES;

    return (mode === 'CREATE')?(
        <FormInMode
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivCreateMenu}
            hostArgs = {HOST_ARGS.CREATE_GENRES}
            namespace = {NAMESPACE}
        />

    ):(mode === 'RETRIEVE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivRetrieveMenu}
            hostArgs = {HOST_ARGS.RETRIEVE_GENRES}
            namespace = {NAMESPACE}
        />

    ):(mode === 'UPDATE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivUpdateMenu}
            hostArgs = {HOST_ARGS.UPDATE_GENRES}
            namespace = {NAMESPACE}
        />

    ):(mode === 'DELETE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivDeleteMenu}
            hostArgs = {HOST_ARGS.DELETE_GENRES}
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
