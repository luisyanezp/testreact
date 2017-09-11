import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavigationBar from './NavigationBar';
import IndexLayout from './IndexLayout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IndexLayout />, document.getElementById('root'));
registerServiceWorker();
