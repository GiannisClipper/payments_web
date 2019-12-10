import React from 'react';

import { 
    CREATE,
    UPDATE,
} from "./constants.js";

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
    )
}

const BtCreate = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onCreate()}
        >Νέα εγγραφή</button>
    )
}

const BtRetrieve = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onRetrieve()}
        >Αναζήτηση</button>
    )
}

const BtUpdate = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onUpdate(item.data.id)}
        >Τροποποίηση</button>
    )
}

const BtDelete = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onDelete(item.data.id)}
        >Διαγραφή</button>
    )
}

const DvMenu = props => {
    return (!props.item.data.id)?(
        <div>
        <BtCreate {...props} />
        <BtRetrieve {...props} />
        </div>
    ):(
        <div>
        <BtUpdate {...props} />
        <BtDelete {...props} />
        </div>
    )
}

const BtSave = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onSave(item.data.id)}
            disabled={!item.uiux.enableSave}
        >Αποθήκευση</button>
    )
}

const BtVerify = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onDelete(item.data.id)}
        >Επιβεβαίωση</button>
    )
}

const BtExit = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onExit(item.data.id)}
        >Κλείσιμο</button>
    )
}

const DvSubMenu = props => {
    let actionType = props.item.uiux.actionType;

    return ([CREATE, UPDATE].includes(actionType))?(
        <div>
        <BtSave {...props} />
        <BtExit {...props} />
        </div>
    ):(
        <div>
        <BtVerify {...props} />
        <BtExit {...props} />
        </div>
    )
}

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

const DvSignupMenu = props => {
    return (
        <div>
            <BtCreate {...props} />
            <BtExit {...props} />
        </div>
    )
};

export const Signup = ({newItem, actions}) => {
    return (
        <div>
            <DvData item={newItem} actions={actions}/>
            <DvSignupMenu item={newItem} actions={actions}/>
        </div>
    );
};
