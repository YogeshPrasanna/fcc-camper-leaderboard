import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App
        thirtyDays="https://fcctop100.herokuapp.com/api/fccusers/top/recent"
        allTime="https://fcctop100.herokuapp.com/api/fccusers/top/alltime"
    />, document.getElementById('root')
);
registerServiceWorker();
