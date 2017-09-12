import React, {Component} from 'react';
import './App.css';
import 'normalize.css';

import Header from "./containers/Header";
import Footer from "./containers/Footer";
import {connect} from "react-redux";
import Page from "./components/Page";
import User from "./components/User";
import * as pageActions from './actions/PageActions'
import {bindActionCreators} from "redux";

class App extends Component {
    render() {
        const {
            user,
            page
        } = this.props;
        const {getPhotos} = this.props.pageActions;
        return (
            <div className="App">
                <Header
                    user={user}
                    page={page}
                />
                {this.props.children}
                <User id={user.id} name={user.name}/>
                <Page getPhotos={getPhotos} year={page.year} photos={page.photos}/>
                <Footer/>
            </div>
        );
    }


}

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch) {
    return {
        pageActions: bindActionCreators(pageActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
