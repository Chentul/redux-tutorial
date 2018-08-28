// https://www.youtube.com/watch?v=OSSpVLpuVWA&t=687s

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers, createStore  } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './reducers/product.reducer';
import userReducer from './reducers/user.reducer';

const allReducers = combineReducers({
	products: productReducer,
	user: userReducer
})

const store = createStore(
	allReducers, 
	{
		products: [ { name: 'iPhone' }, { name: 'Motorola Z' } ],
		user: 'Michale'
	},
	window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
	);
registerServiceWorker();
