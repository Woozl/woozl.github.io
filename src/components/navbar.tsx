import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { nav } from './navbar.module.sass';
import Icon from './icon';
import useDarkMode from 'use-dark-mode';

const Navbar = () => {
    const darkMode = useDarkMode(true);

    return (
        <nav className={nav}>
            {/* <h1><Link to='/'>David Glymph</Link></h1> */}
            <Link style={{height: "3rem"}} to='/'><Icon fill={darkMode.value ? '#d2d2d2' : '#000'} ></Icon></Link>
            <ul>
                <li><Link to='/blog'>blog</Link></li>
                <li><Link to='/projects'>projects</Link></li>
                {/* <li style={{cursor: "pointer", userSelect: "none"}} onClick={darkMode.toggle}>{darkMode.value ? "🌞":"🌚"}</li> */}
                <li><button onClick={darkMode.toggle}>{darkMode.value ? "🌞":"🌚"}</button></li>
            </ul>
        </nav>
    )
};

export default Navbar;