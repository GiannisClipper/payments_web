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

export const GenresForm = ({namespace, mode}) => {

    const name = 'genres';
    const title = LABELS.MENU_GENRES;

    return (mode === 'CREATE')?(
        <FormInMode 
            name = {name}
            mode = {mode.toLowerCase()}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivCreateMenu}
            namespace = {namespace}
            hostArgs = {HOST_ARGS.CREATE_GENRES}
        />

    ):(mode === 'RETRIEVE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivRetrieveMenu}
            namespace = {namespace}
            hostArgs = {HOST_ARGS.RETRIEVE_GENRES}
        />

    ):(mode === 'UPDATE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivUpdateMenu}
            namespace = {namespace}
            hostArgs = {HOST_ARGS.UPDATE_GENRES}
        />

    ):(mode === 'DELETE')?(
        <FormInMode 
            name = {name}
            mode = {mode}
            title = {title}
            MappedDivModeData = {MappedDivInputs}
            DivModeMenu = {DivDeleteMenu}
            namespace = {namespace}
            hostArgs = {HOST_ARGS.DELETE_GENRES}
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
    );
}
