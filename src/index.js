import React from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './AppClass';
import AppFunc from './AppFunc';

ReactDOM.render(
    <>
        <App name="Luis" />
        <AppFunc name="Marco" mostrar={false} />
    </>
    , document.querySelector('#root'));