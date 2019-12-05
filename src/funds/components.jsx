import React from 'react';

import { 
    CREATE,
    UPDATE,
} from "./constants.js";

const InCode = ({item, actions}) => {
    return (
        <input
            value={item.data.code}
            onChange={event => actions.onChangeCode(item.data.id, event.target.value)}
            disabled={!item.uiux.enableEdit}
        />
    );
};

const InName = ({item, actions}) => {
    return (
        <input 
            value={item.data.name}
            onChange={event => actions.onChangeName(item.data.id, event.target.value)}
            disabled={!item.uiux.enableEdit}
        />
    );
};

const DvData = props => {
    return (
        <div>
            <InCode {...props}/>
            <InName {...props}/>
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

const Fund = props => {
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
    
export const Funds = ({newItem, items, actions}) => {
    return (
        <div>
            <Fund item={newItem} actions={actions} />
            <ul>
                <li>{items.map(item => <Fund item={item} actions={actions} />)}</li>
            </ul>
        </div>
    );
};

//export default Funds;