import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './main';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('UA-126044321-1');
    ReactGA.pageview('/homepage');
}

initializeReactGA();

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
