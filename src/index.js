import React from 'react';
import ReactDOM from 'react-dom';
import Country from './components/country/index';
import registerServiceWorker from './registerServiceWorker';
import './style.css';

ReactDOM.render(<Country />, document.getElementById('root'));
registerServiceWorker();
