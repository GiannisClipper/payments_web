import React from 'react';
import { useHistory } from "react-router-dom";

import { 
    CREATE,
    UPDATE,
} from "./constants.js";

export const BtCreate = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onCreate()}
            disabled={!item.uiux.enableSave}
        >Νέα εγγραφή</button>
    );
};

export const BtRetrieve = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onRetrieve()}
        >Αναζήτηση</button>
    );
};

export const BtUpdate = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onUpdate(item.data.id)}
        >Τροποποίηση</button>
    );
};

export const BtDelete = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onDelete(item.data.id)}
        >Διαγραφή</button>
    );
};

export const DvMenu = props => {
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
    );
};

// --- --- --- --- --- --- --- --- ---

export const BtSave = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onSave(item.data.id)}
            disabled={!item.uiux.enableSave}
        >Αποθήκευση</button>
    );
};

export const BtVerify = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onDelete(item.data.id)}
        >Επιβεβαίωση</button>
    );
};

export const BtExit = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onExit(item.data.id)}
        >Κλείσιμο</button>
    );
};

export const BtRoot = ({item, initialData, actions}) => {
    let history = useHistory();

    return (
        <button
            onClick={() => 
                {
                    actions.onExit(item.data.id, initialData);
                    history.push('/');     
                }       
            }
        >Κλείσιμο</button>
    );
};

export const DvSubMenu = props => {
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
    );
};
