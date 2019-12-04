import React from 'react';

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

const DvMenuCreateRetrieve = props => {
    return (
        <div>
            <BtCreate {...props} />
            <BtRetrieve {...props} />
        </div>
    )
}

const BtUpdate = () => {
    return (
        <button>
            Τροποποίηση
        </button>
    )
}

const BtDelete = () => {
    return (
        <button>
            Διαγραφή
        </button>
    )
}

const DvMenuUpdateDelete = props => {
    return (
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

const BtExit = ({item, actions}) => {
    return (
        <button
            onClick={() => actions.onExit(item.data.id)}
        >Κλείσιμο</button>
    )
}

const DvMenuSaveExit = props => {
    return (
        <div>
            <BtSave {...props} />
            <BtExit {...props} />
        </div>
    )
}

const NewFund = props => {
    return (
        <div>
            <DvData {...props}/>
            {(!props.item.uiux.enableMenu)?(
                <DvMenuCreateRetrieve {...props} />
            ):(
                <DvMenuSaveExit {...props} />
            )}
        </div>
    );
};
    
const Fund = props => {
    return (
      <div>
            <DvData {...props}/>
            {(!props.item.uiux.enableMenu)?(
                <DvMenuUpdateDelete {...props} />
            ):(
                <DvMenuSaveExit {...props} />
            )}
      </div>
    );
};

export const Funds = ({newItem, items, actions}) => {
    return (
        <div>
            <NewFund item={newItem} actions={actions} />
            <ul>
                <li>{items.map(item => <Fund item={item} actions={actions} />)}</li>
            </ul>
        </div>
    );
};

//export default Funds;