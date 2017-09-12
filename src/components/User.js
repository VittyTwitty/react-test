import React, {PropTypes, Component} from 'react';

export default class User extends Component {
    render() {
        const {name, surname, age, id} = this.props;
        return (
            <div>
                <p>
                    <span>{id})</span> Привет, {name}
                    </p>
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
};