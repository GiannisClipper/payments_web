import React from 'react';

import { 
    DvItemMenu,
    BtCloseForm,
    BtGoHome,
} from '../core/components.jsx';

// --- --- --- --- --- --- --- --- ---

const InUsername = ({uiux, data, actions}) => {
    return (
        <input
            value={data.username}
            onChange={event => actions.onChangeUsername(data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const InPassword = ({uiux, data, actions}) => {
    return (
        <input 
            value={data.password}
            onChange={event => actions.onChangePassword(data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const InPassword2 = ({uiux, data, actions}) => {
    return (
        <input 
            value={data.password2}
            onChange={event => actions.onChangePassword2(data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const InEmail = ({uiux, data, actions}) => {
    return (
        <input 
            value={data.email}
            onChange={event => actions.onChangeEmail(data.id, event.target.value)}
            disabled={!uiux.allowEdit}
        />
    );
};

const DvUserData = props => {
    return (
        <div>
            <InUsername {...props}/>
            <InPassword {...props}/>
            <InPassword2 {...props}/>
            <InEmail {...props}/>
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

const DvSignupData = props => {
    return (
        <div>
            <InUsername {...props}/>
            <InPassword {...props}/>
            <InPassword2 {...props}/>
            <InEmail {...props}/>
        </div>
    );
};

const BtSignup = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyCreate(globals, data)}
            disabled={!uiux.allowSave}
        >
            {(uiux.isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Υποβολή
        </button>
    );
};

const DvSignupMenu = props => {
    return (
        <div>
            <BtSignup {...props} />
            <BtCloseForm {...props} />
        </div>
    );
};

export const SignupForm = props => {
    return (
        <div>
            <DvSignupData {...props} />
            <DvSignupMenu {...props} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

const DvSigninData = props => {
    return (
        <div>
            <InUsername {...props}/>
            <InPassword {...props}/>
        </div>
    );
};

const BtSignin = ({globals, uiux, data, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyRetrieve(globals, data)}
            disabled={!uiux.allowSave}
        >
            {(uiux.isLoading)?(<i className="fa fa-refresh fa-spin"></i>):null}
            Είσοδος
        </button>
    );
};

const DvSigninMenu = props => {
    return (
        <div>
            <BtSignin {...props} />
            <BtCloseForm {...props} />
        </div>
    );
};

export const SigninForm = props => {
    return (
        <div>
            <DvSigninData {...props}/>
            <DvSigninMenu {...props}/>
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

export const SignoutForm = ({globals, actions}) => {

    if (globals.user && globals.user.id)
        actions.onSignout();

    return (
        <div>
            Επιτυχής αποσύνδεση χρήστη ({(globals.user && globals.user.username)?globals.user.username:''})
            <BtGoHome {...actions} />
        </div>
    );
};
