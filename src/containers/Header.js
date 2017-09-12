import React, {Component} from 'react';
import HeaderMenu from "./Header-menu";
import HeaderSignMenu from "./Header-sign-menu";

export default class Header extends Component {
    render() {
        let {
            name, surname, age
        } = this.props.user;
        let {
            year,
            photos
        } = this.props.page;
        return (
            <div className='header'>
                <HeaderMenu/>

                <HeaderSignMenu/>
                Данные: {name} {' ' + surname}, {age} лет <br/>
                У вас {photos.length} фото {year} года
            </div>
        )
    }
}