import * as React from 'react';
import PropTypes, { bool } from 'prop-types';
import { Collapse, Navbar, Nav } from 'reactstrap';
import './navBar.css';
import {
    NAV_BAR_THEME_DARK,
    NAV_BAR_THEME_LIGHT,
    NAV_LINKS
} from './constant';
import NavLinks from './navLinks';


const NavBar = ({ navBarTheme, isUserLoggedIn }) => (
    <div>
        <Navbar color={navBarTheme} dark expand="lg" className="pmd-navbar">
            <Collapse navbar className="justify-content-center">
                <Nav navbar>
                    {
                        NAV_LINKS
                        &&
                        NAV_LINKS.length > 0
                        &&
                        <NavLinks navBarLinks={NAV_LINKS} isUserLoggedIn={isUserLoggedIn} />
                    }
                </Nav>
            </Collapse>
        </Navbar>
    </div>
)



NavBar.defaultProps = {
    navBarTheme: NAV_BAR_THEME_DARK
}

NavBar.propTypes = {
    navBarTheme: PropTypes.oneOf([
        NAV_BAR_THEME_DARK,
        NAV_BAR_THEME_LIGHT
    ]),
    isUserLoogedIn: bool.isRequired
}

export default NavBar;