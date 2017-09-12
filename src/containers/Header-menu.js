import React, {Component} from 'react';
import {Link} from "react-router";

export default class HeaderMenu extends Component {
    render() {
        return (
            <ul className='main-menu'>
                <li>
                    <Link to='/home'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/profile'>Profile</Link>
                </li>
            </ul>
        )
    }
}
