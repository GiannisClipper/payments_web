import React from 'react';

import { useHistory } from "react-router-dom";

import { LABELS } from '../constants.js';

// --- --- --- --- --- --- --- --- ---
// Button select...
// --- --- --- --- --- --- --- --- ---

export class ButtonSelect extends React.Component {
    render() {
        const name = this.props.name;
        const label = this.props.label;
        const onSelect = this.props.onSelect;
        return (
            <button className={`button_select button_select_${name}`}
                onClick={() => onSelect()}
            >{label}</button>
        )
    }
}

export const ButtonSelectCreate = ({onSelect}) => {
    return (
        <ButtonSelect
            name = 'create'
            label = {LABELS.BUTTON_SELECT_CREATE}
            onSelect = {onSelect}
        />
    )
}

export const ButtonSelectRetrieve = ({onSelect}) => {
    return (
        <ButtonSelect
            name = 'retrieve'
            label = {LABELS.BUTTON_SELECT_RETRIEVE}
            onSelect = {onSelect}
        />
    )
}

export const ButtonSelectUpdate = ({onSelect}) => {
    return (
        <ButtonSelect
            name = 'update'
            label = {LABELS.BUTTON_SELECT_UPDATE}
            onSelect = {onSelect}
        />
    )
}

export const ButtonSelectDelete = ({onSelect}) => {
    return (
        <ButtonSelect
            name = 'delete'
            label = {LABELS.BUTTON_SELECT_DELETE}
            onSelect = {onSelect}
        />
    )
}

// --- --- --- --- --- --- --- --- ---
// Button request...
// --- --- --- --- --- --- --- --- ---

export class ButtonRequest extends React.Component {
    render() {
        const name = this.props.name;
        const label = this.props.label;
        const allowRequest = this.props.allowRequest;
        const onRequest = this.props.onRequest;
        const auth = this.props.auth;
        const data = this.props.data;
        const isLoading = this.props.isLoading;

        return (
            <button className={`button_request button_request_${name}`}
                onClick={() => onRequest(auth, data)}
                disabled={!allowRequest}
            >
                {(isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
                {label}
            </button>
        )
    }
}

export const ButtonRequestCreate = ({auth, data, allowRequest, isLoading, onRequest}) => {
    return (
        <ButtonRequest
            name = 'create'
            label = {LABELS.BUTTON_REQUEST_CREATE}
            allowRequest = {allowRequest}
            onRequest = {onRequest}
            auth = {auth}
            data = {data}
            isLoading = {isLoading}
        />
    )
}

export const ButtonRequestRetrieve = ({auth, data, isLoading, onRequest}) => {
    return (
        <ButtonRequest
            name = 'retrieve'
            label = {LABELS.BUTTON_REQUEST_RETRIEVE}
            allowRequest = {true}
            onRequest = {onRequest}
            auth = {auth}
            data = {data}
            isLoading = {isLoading}
        />
    )
}

export const ButtonRequestUpdate = ({auth, data, allowRequest, isLoading, onRequest}) => {
    return (
        <ButtonRequest
            name = 'update'
            label = {LABELS.BUTTON_REQUEST_UPDATE}
            allowRequest = {allowRequest}
            onRequest = {onRequest}
            auth = {auth}
            data = {data}
            isLoading = {isLoading}
        />
    )
}

export const ButtonRequestDelete = ({auth, data, isLoading, onRequest}) => {
    return (
        <ButtonRequest
            name = 'delete'
            label = {LABELS.BUTTON_REQUEST_DELETE}
            allowRequest = {true}
            onRequest = {onRequest}
            auth = {auth}
            data = {data}
            isLoading = {isLoading}
        />
    )
}

// --- --- --- --- --- --- --- --- ---
// Button close...
// --- --- --- --- --- --- --- --- ---

export const ButtonCloseData = ({onClose}) => {
    return (
        <button
            onClick={() => onClose()}
        >{LABELS.BUTTON_CLOSE_MODE}</button>
    )
}

export const ButtonCloseForm = ({onClose, onGoHome}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => {
                onClose();
                onGoHome(history);
            }}
        >{LABELS.BUTTON_CLOSE_FORM}</button>
    )
}

export const ButtonGoHome = ({onGoHome}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => onGoHome(history)}
        >{LABELS.BUTTON_GO_HOME}</button>
    )
}
