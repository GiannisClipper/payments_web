import { connect } from 'react-redux';

import { Nav } from '../components/Nav.jsx';

import { NAMESPACE } from '../../auth/constants.js';

export const MappedNav = connect(
    state => ({
        auth: state[NAMESPACE],
    }),
)(Nav);