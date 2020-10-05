import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import App from './components/App';
import * as serviceWorker from './serviceWorker';

import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();


//aaaa
