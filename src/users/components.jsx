import React from 'react';

import { initialData } from './reducers.js';

import { 
    DvItemMenu,
    BtCloseForm,
    BtGoHome,
} from '../core/components.jsx';

// --- --- --- --- --- --- --- --- ---

const InUsername = ({item, actions}) => {
    return (
        <input
            value={item.data.username}
            onChange={event => actions.onChangeUsername(item.data.id, event.target.value)}
            disabled={!item.uiux.enableEdit}
        />
    );
};

const InPassword = ({item, actions}) => {
    return (
        <input 
            value={item.data.password}
            onChange={event => actions.onChangePassword(item.data.id, event.target.value)}
            disabled={!item.uiux.enableEdit}
        />
    );
};

const InPassword2 = ({item, actions}) => {
    return (
        <input 
            value={item.data.password2}
            onChange={event => actions.onChangePassword2(item.data.id, event.target.value)}
            disabled={!item.uiux.enableEdit}
        />
    );
};

const InEmail = ({item, actions}) => {
    return (
        <input 
            value={item.data.email}
            onChange={event => actions.onChangeEmail(item.data.id, event.target.value)}
            disabled={!item.uiux.enableEdit}
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

const UserItem = props => {
    return (
        <div>
            <DvUserData {...props}/>
            <DvItemMenu {...props}/>
        </div>
    );
};

export const UsersForm = ({newItem, items, actions}) => {
    return (
        <div>
            <UserItem item={newItem} actions={actions} />
            <ul>
                <li>{items.map(item => <UserItem item={item} actions={actions} />)}</li>
            </ul>
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

const BtSignup = ({globals, item, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyCreate(globals, item.data)}
            disabled={!item.uiux.enableSave}
        >
            {(item.uiux.isLoading)?(
                <i className="fa fa-refresh fa-spin"></i>
            ):null}
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

export const SignupForm = ({globals, newItem, actions}) => {
    return (
        <div>
            <DvSignupData item={newItem} actions={actions}/>
            <DvSignupMenu globals={globals} item={newItem} initialData={initialData} actions={actions}/>
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

const BtSignin = ({globals, item, actions}) => {
    return (
        <button
            onClick={() => actions.onVerifyRetrieve(globals, item.data)}
            disabled={!item.uiux.enableSave}
        >
            {(item.uiux.isLoading)?(
                <i className="fa fa-refresh fa-spin"></i>
            ):null}
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

export const SigninForm = ({globals, newItem, actions}) => {
    return (
        <div>
            <DvSigninData item={newItem} actions={actions}/>
            <DvSigninMenu globals={globals} item={newItem} initialData={initialData} actions={actions}/>
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
