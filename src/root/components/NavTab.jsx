import React from 'react';
import { NavLink } from 'react-router-dom';

const NavTab = props => {
    const activeStyle = {
        color: 'orange',
        fontWeight: 'bold'
    };

    const navStyle = {
        color: 'green',
        margin: '10px'
    };

    return (
        <NavLink style={navStyle} activeStyle={activeStyle} to={props.to}>
            {props.label}
        </NavLink>
    );
};

export default NavTab;