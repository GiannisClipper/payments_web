import { connect } from 'react-redux';
import { Users, Signup } from './components.jsx';
import {
    onCreate,
    onRetrieve,
    onUpdate,
	onChangeUsername,
	onChangePassword,
	onChangePassword2,
	onChangeEmail,
	onSave,
	onDelete,
    onVerifyDelete,
    onExit,
} from './actions.js';

const mapStateToProps = (state, ownProps=null) => {
    //const { dateId } = ownProps;
    return {
        newItem: {...state.users.newItem},
        items: [...state.users.items],
    };
}

const mapDispatchToProps = dispatch => {
    return {
        actions: {
            onCreate: () => dispatch(onCreate()),
            onRetrieve: () => dispatch(onRetrieve()),
            onUpdate: id => dispatch(onUpdate(id)),
            onChangeUsername: (id, username) => dispatch(onChangeUsername(id, username)),
            onChangePassword: (id, password) => dispatch(onChangePassword(id, password)),
            onChangePassword2: (id, password2) => dispatch(onChangePassword2(id, password2)),
            onChangeEmail: (id, email) => dispatch(onChangeEmail(id, email)),
            onSave: id => dispatch(onSave(id)),
            onDelete: id => dispatch(onDelete(id)),
            onVerifyDelete: id => dispatch(onVerifyDelete(id)),
            onExit: id => dispatch(onExit(id)),
        }
    };
}

const mapStateToPropsSignup = state => {
    let retval = {
        globals: {...state.globals},
        newItem: {...state.users.newItem},
    };
    retval.newItem.uiux.enableEdit = true;
    return retval;
}

const mapDispatchToPropsSignup = dispatch => {
    return {
        actions: {
            onCreate: () => dispatch(onCreate()),
            onChangeUsername: (id, username) => dispatch(onChangeUsername(id, username)),
            onChangePassword: (id, password) => dispatch(onChangePassword(id, password)),
            onChangePassword2: (id, password2) => dispatch(onChangePassword2(id, password2)),
            onChangeEmail: (id, email) => dispatch(onChangeEmail(id, email)),
            onSave: id => dispatch(onSave(id)),
            onExit: id => dispatch(onExit(id)),
        }
    };
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export const SignupContainer = connect(mapStateToPropsSignup, mapDispatchToPropsSignup)(Signup);