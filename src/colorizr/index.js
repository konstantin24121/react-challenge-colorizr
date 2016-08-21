import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';

import App from './App';

const store = createStore(allReducers);

render(
	<Provider store={store}>
		<App />
	</Provider>
, document.getElementById('app'));
