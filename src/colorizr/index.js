import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import {createStore} from 'redux';

const store = createStore();

render(<App />, document.getElementById('app'));
