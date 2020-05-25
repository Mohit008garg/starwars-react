/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import PropTypes, { bool } from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';
import { Logout, SignIn, SignUp } from './constant';

const NavLinks = (props) => {
    const { navBarLinks, isUserLoggedIn } = props;
    console.log('isUserLoggedIn-------', isUserLoggedIn);
    return (
        navBarLinks.map((link) => {
            if ((link.title === SignUp || link.title === SignIn) && (isUserLoggedIn)) {
                return ({ ...link, shouldDisplayBeforeLogin: false})
            } else if ((link.title === Logout) && (isUserLoggedIn)) {
                return ({ ...link, shouldDisplayBeforeLogin: true})
            }
            return link;
        }).filter(({ shouldDisplayBeforeLogin }) => shouldDisplayBeforeLogin).map((link, key) => {
            const { route, title } = link;
            return (
                <NavItem key={key}>
                    <NavLink exact activeClassName='active' tag={RRNavLink} className="navbar-bg"
                        to={route}>{title}</NavLink>
                </NavItem >
            );
        })

    );
}

NavLinks.defaultProps = {
    navLinks: []
}

NavLinks.propTypes = {
    navBarLinks: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
        })
    ),
    isUserLoggedIn: bool.isRequired

}

export default NavLinks;