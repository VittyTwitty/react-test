import React, {Component} from 'react';

export default class Login extends Component {
    render() {
        return (
            <form>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Password'/>
                <button>Submit</button>
            </form>
        )
    }

}