import React from 'react';

import { useHistory } from "react-router-dom";

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---

export const ButtonSelectCreate = ({onSelect}) => {
    return (
        <button
            onClick={() => onSelect()}
        >{LABELS.BUTTON_SELECT_CREATE}</button>
    );
};

export const ButtonSelectRetrieve = ({onSelect}) => {
    return (
        <button
            onClick={() => onSelect()}
        >{LABELS.BUTTON_SELECT_RETRIEVE}</button>
    );
};

export const ButtonSelectUpdate = ({onSelect}) => {
    return (
        <button
            onClick={() => onSelect()}
        >{LABELS.BUTTON_SELECT_UPDATE}</button>
    );
};

export const ButtonSelectDelete = ({onSelect}) => {
    return (
        <button
            onClick={() => onSelect()}
        >{LABELS.BUTTON_SELECT_DELETE}</button>
    );
};

// --- --- --- --- --- --- --- --- ---

export const ButtonRequestCreate = ({auth, data, allowRequest, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
            disabled={!allowRequest}
        >{LABELS.BUTTON_REQUEST_CREATE}</button>
    );
};

export const ButtonRequestRetrieve = ({auth, data, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
        >{LABELS.BUTTON_REQUEST_RETRIEVE}</button>
    );
};

export const ButtonRequestUpdate = ({auth, data, allowRequest, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
            disabled={!allowRequest}
        >{LABELS.BUTTON_REQUEST_UPDATE}</button>
    );
};

export const ButtonRequestDelete = ({auth, data, onRequest}) => {
    return (
        <button
            onClick={() => onRequest(auth, data)}
        >{LABELS.BUTTON_REQUEST_DELETE}</button>
    );
};

// --- --- --- --- --- --- --- --- ---

export const ButtonCloseData = ({onClose}) => {
    return (
        <button
            onClick={() => onClose()}
        >{LABELS.BUTTON_CLOSE_DATA}</button>
    );
};

export const ButtonCloseForm = ({onClose, onGoHome}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => {
                onClose();
                onGoHome(history);
            }}
        >{LABELS.BUTTON_CLOSE_FORM}</button>
    );
};

export const ButtonGoHome = ({onGoHome}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => onGoHome(history)}
        >{LABELS.BUTTON_GO_HOME}</button>
    );
};
