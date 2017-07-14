/**
    File name: index.js
    Author: Abhishek H Shetty
    This component adds a the top level component for the application.
**/

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
/** For version 4.0 of React the browserHistory package has been removed and is
    replaced by history package **/
import { createBrowserHistory } from 'history'

import App from './js/App';
import './css/main.css';
import './libs/bootstrap/css/bootstrap.min.css';
//import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router history={createBrowserHistory()}>
        <App></App>
    </Router>, document.getElementById('root'));
//registerServiceWorker();
