import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
// import {BrowserRouter} from 'react-router-dom';
// import Root from "./middleware/routing/Root";
// import {store} from './redux/Store';

import * as serviceWorker from './serviceWorker';
import MainPage from "./pages/MainPage";

ReactDOM.render((
  <MainPage />
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
