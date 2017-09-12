import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from "./registerServiceWorker";
import './index.css';
import App from './App';
import {Route, Router, browserHistory, IndexRoute} from "react-router";
import Home from "./containers/Home";
import About from "./containers/About";
import Profile from "./containers/Profile";
import Login from "./containers/Login";
import {Provider} from 'react-redux'
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={Home}/>
                <Route path='home' component={Home}/>
                <Route path='about' component={About}/>
                <Route path='profile' component={Profile}/>
                <Route path='login' component={Login}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
)
;
registerServiceWorker();
