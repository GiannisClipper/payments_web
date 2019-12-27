import { useHistory } from "react-router-dom";

import React from 'react';

// --- --- --- --- --- --- --- --- ---

export const ButtonSelectCreate = ({uiux, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectCreate(uiux)}
        >Νέα εγγραφή</button>
    );
};

export const ButtonSelectRetrieve = ({uiux, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectRetrieve(uiux)}
        >Αναζήτηση</button>
    );
};

export const ButtonSelectUpdate = ({uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectUpdate(uiux, data)}
        >Τροποποίηση</button>
    );
};

export const ButtonSelectDelete = ({uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onSelectDelete(uiux, data)}
        >Διαγραφή</button>
    );
};

export const ButtonCloseForm = ({uiux, initialData, actions}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => {
                actions.onCloseForm(uiux, initialData);
                actions.onGoHome(uiux, history);
            }}
        >Κλείσιμο</button>
    );
};

export const ButtonGoHome = ({uiux, actions}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => actions.onGoHome(uiux, history)}
        >Κλείσιμο</button>
    );
};

export const DivFormMenu = props => {
    return (
        <div>
            <ButtonSelectCreate {...props} />
            <ButtonSelectRetrieve {...props} />
            <ButtonCloseForm {...props} />
        </div>
    );
};

export const DivItemMenu = props => {
    return (
        <div>
            <ButtonSelectUpdate {...props} />
            <ButtonSelectDelete {...props} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

export const ButtonVerifyCreate = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyCreate(globals, uiux, data)}
            disabled={!uiux.allowSave}
        >Αποθήκευση</button>
    );
};

export const ButtonVerifyUpdate = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyUpdate(globals, uiux, data)}
            disabled={!uiux.allowSave}
        >Αποθήκευση</button>
    );
};

export const ButtonVerifyRetrieve = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyRetrieve(globals, uiux, data)}
        >Αναζήτηση</button>
    );
};

export const ButtonVerifyDelete = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyDelete(globals, uiux, data)}
        >Επιβεβαίωση</button>
    );
};

export const ButtonCloseData = ({uiux, initialData, actions}) => {
    return (
        <button
            onClick={() => actions.onCloseData(uiux, initialData)}
        >Κλείσιμο</button>
    );
};

export const DivCreateMenu = props => {
    return (
        <div>
            <ButtonVerifyCreate {...props} />
            <ButtonCloseData {...props} />
        </div>
    );
};

export const DivUpdateMenu = props => {
    return (
        <div>
            <ButtonVerifyUpdate {...props} />
            <ButtonCloseData {...props} />
        </div>
    );
};

export const DivRetrieveMenu = props => {
    return (
        <div>
            <ButtonVerifyRetrieve {...props} />
            <ButtonCloseData {...props} />
        </div>
    );
};

export const DivDeleteMenu = props => {
    return (
        <div>
            <ButtonVerifyDelete {...props} />
            <ButtonCloseData {...props} />
        </div>
    );
};
