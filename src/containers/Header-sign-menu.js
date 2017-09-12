import React, {Component} from 'react';
import {Link} from "react-router";

export default class HeaderSignMenu extends Component {
    render() {
        return (
            <ul>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        )
    }
}