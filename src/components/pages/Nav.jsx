import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../images/avatar.png';

import '../css-folders/Nav.css'

const Nav = () => {
    return (

        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <div>
                <img src={avatar} alt="avatar" />
                <button>Login</button>
                <button>Logout</button>
            </div>
        </nav>

    );
};

export default Nav;
