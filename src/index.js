import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
/*import reducers from './store/reducers';

const store = createStore(
	reducers,
	{},
	applyMiddleware(reduxThunk)
);*/

ReactDOM.render(
	
		<App />
	,
	document.getElementById('root')
);/*
ReactDOM.render(
	<Provider>
		<App />
	</Provider>,
	document.getElementById('root')
);*/