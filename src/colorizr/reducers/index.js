import {combineReducers} from 'redux';

import colorpickerReducer from './colorpicker.js';
import paleteReducer from './palete.js';
import saturateReducer from './saturate.js';

const allReducers = combineReducers({
	colorpicker: colorpickerReducer,
	palete: paleteReducer,
	saturate: saturateReducer
});

export default allReducers;