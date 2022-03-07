import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main-component/App/App';
import * as serviceWorker from './serviceWorker';
import './css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';



// GLOBAL VARIABLES

window.$primaryLanguage = 'Pt-Br';
window.$secondaryLanguage = 'De';
window.$thirdLanguage = 'Fr';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';
window.$thirdLanguageIconId = 'third-lang-icon';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
