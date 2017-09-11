import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from "./registerServiceWorker";
import './index.css';
import App from './App';
import {Route, Router, browserHistory, IndexRoute} from "react-router";
import Home from "./containers/Home";
import About from "./containers/About";


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      {/*<IndexRoute component={Home}></IndexRoute>*/}
      <Route path='home' component={Home} />
      <Route path='about' component={About}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
