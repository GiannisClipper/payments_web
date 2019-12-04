import { connect } from 'react-redux';
import { Funds } from './components.jsx';
import {
    onCreate,
    onUpdate,
	onChangeCode,
	onChangeName,
	onSave,
	onDelete,
    onVerifyDelete,
    onExit,
 } from './actions.js';

const mapStateToProps = (state, ownProps=null) => {
    //const { dateId } = ownProps;
    return {
        newItem: {...state.funds.newItem},
        items: [...state.funds.items],
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            onCreate: () => dispatch(onCreate()),
            onUpdate: id => dispatch(onUpdate(id)),
            onChangeCode: (id, code) => dispatch(onChangeCode(id, code)),
            onChangeName: (id, name) => dispatch(onChangeName(id, name)),
            onSave: id => dispatch(onSave(id)),
            onDelete: id => dispatch(onDelete(id)),
            onVerifyDelete: id => dispatch(onVerifyDelete(id)),
            onExit: id => dispatch(onExit(id)),
        }
    };
}

export const FundsContainer = connect(mapStateToProps, mapDispatchToProps)(Funds)

//export default FundsContainer;
