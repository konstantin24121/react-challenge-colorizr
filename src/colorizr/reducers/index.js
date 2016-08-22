import {combineReducers} from 'redux';

import ColorpickerReducer from './colorpicker.js';
import paliteReducer from './palite.js';

const allReducers = combineReducers({
	colorpicker: ColorpickerReducer,
	palite: paliteReducer
});

export default allReducers;