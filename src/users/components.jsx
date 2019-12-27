import React from 'react';

import { 
    DivItemMenu,
    ButtonCloseForm,
    ButtonGoHome,
} from '../core/components.jsx';

// --- --- --- --- --- --- --- --- ---

const InputUsername = ({uiux, data, actions}) => {
    return (
        <input
            value={data.username}
            onChange={event => actions.onChangeUsername(uiux, data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const InputPassword = ({uiux, data, actions}) => {
    return (
        <input 
            value={data.password}
            onChange={event => actions.onChangePassword(uiux, data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const InputPassword2 = ({uiux, data, actions}) => {
    return (
        <input 
            value={data.password2}
            onChange={event => actions.onChangePassword2(uiux, data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const InputEmail = ({uiux, data, actions}) => {
    return (
        <input 
            value={data.email}
            onChange={event => actions.onChangeEmail(uiux, data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const DivEdit = props => {
    return (
        <div>
            <InputUsername {...props}/>
            <InputPassword {...props}/>
            <InputPassword2 {...props}/>
            <InputEmail {...props}/>
        </div>
    );
};

export const UsersForm = ({uiux, data, actions}) => {
    return (
        <div>
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

const DivSignupEdit = props => {
    return (
        <div>
            <InputUsername {...props}/>
            <InputPassword {...props}/>
            <InputPassword2 {...props}/>
            <InputEmail {...props}/>
        </div>
    );
};

const ButtonSignup = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyCreate(globals, uiux, data)}
            disabled={!uiux.allowSave}
        >
            {(uiux.isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Υποβολή
        </button>
    );
};

const DivSignupMenu = props => {
    return (
        <div>
            <ButtonSignup {...props} />
            <ButtonCloseForm {...props} />
        </div>
    );
};

export const SignupForm = props => {
    return (
        <div>
            <DivSignupEdit {...props} />
            <DivSignupMenu {...props} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

const DivSigninEdit = props => {
    return (
        <div>
            <InputUsername {...props}/>
            <InputPassword {...props}/>
        </div>
    );
};

const ButtonSignin = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyRetrieve(globals, uiux, data)}
            disabled={!uiux.allowSave}
        >
            {(uiux.isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Είσοδος
        </button>
    );
};

const DivSigninMenu = props => {
    return (
        <div>
            <ButtonSignin {...props} />
            <ButtonCloseForm {...props} />
        </div>
    );
};

export const SigninForm = props => {
    return (
        <div>
            <DivSigninEdit {...props}/>
            <DivSigninMenu {...props}/>
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

export const SignoutForm = props => {
    const globals = props.globals;
    const actions = props.actions;

    if (globals.user && globals.user.id)
        actions.onSignout();

    return (
        <div>
            Επιτυχής αποσύνδεση χρήστη ({(globals.user && globals.user.username)?globals.user.username:''})
            <ButtonGoHome {...props} />
        </div>
    );
};
