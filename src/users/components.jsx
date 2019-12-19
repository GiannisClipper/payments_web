import React from 'react';

import { 
    DvMenu,
    DvSubMenu,
    BtRoot,
} from '../core/components.jsx';

import { initialData } from './reducers.js';

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

const DvData = props => {
    return (
        <div>
            <InUsername {...props}/>
            <InPassword {...props}/>
            <InPassword2 {...props}/>
            <InEmail {...props}/>
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

const User = props => {
    return (
        <div>
            <DvData {...props}/>
            {(!props.item.uiux.enableSubMenu)?(
                <DvMenu {...props}/>
            ):(
                <DvSubMenu {...props}/>
            )}
        </div>
    );
};

export const Users = ({newItem, items, actions}) => {
    return (
        <div>
            <User item={newItem} actions={actions} />
            <ul>
                <li>{items.map(item => <User item={item} actions={actions} />)}</li>
            </ul>
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

const BtSignup = ({item, initialData, actions}) => {
    return (
        <button
            onClick={() => actions.onCreate()}
            disabled={!item.uiux.enableSave}
        >
            {(item.uiux.isLoading)?(
                <i class="fa fa-refresh fa-spin"></i>
            ):null}
            Υποβολή
        </button>
    );
};

const DvSignupMenu = props => {
    return (
        <div>
            <BtSignup {...props} />
            <BtRoot {...props} />
        </div>
    );
};

// --- --- --- --- --- --- --- --- ---

export const Signup = ({newItem, actions}) => {
    return (
        <div>
            <DvData item={newItem} actions={actions}/>
            <DvSignupMenu item={newItem} initialData={initialData} actions={actions}/>
        </div>
    );
};
