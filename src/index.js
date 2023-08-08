import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import './index.css';
import App from './App';

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);