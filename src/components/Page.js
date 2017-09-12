import React, {PropTypes, Component} from 'react';

export default class Page extends Component {
    constructor() {
        super();
        this.props.setYear = ::this.props.setYear;

    }
    onYearBtnClick(e) {
        this.props.setYear(+e.target.textContent);
        console.log(this.props.setYear)
    }

    render() {
        const {
            year,
            photos
        } = this.props;
        return (
            <div>
                <p>
                    <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
                    <button onClick={this.onYearBtnClick.bind(this)}>2017</button>
                    <button onClick={this.onYearBtnClick.bind(this)}>2018</button>
                </p>
                <p>У тебя {photos.length} фото за {year} год</p>
            </div>
        )
    }
}

Page.propTypes = {
    year: PropTypes.number.isRequired,
    photos: PropTypes.array.isRequired,
    setYear: PropTypes.func.isRequired
};