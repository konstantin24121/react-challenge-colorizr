import {combineReducers} from 'redux';

import ColorpickerReducer from './colorpicker.js';

const allReducers = combineReducers({
	colorpicker: ColorpickerReducer
});

export default allReducers;