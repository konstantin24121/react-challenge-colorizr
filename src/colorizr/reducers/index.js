import {combineReducers} from 'redux';

import colorpickerReducer from './colorpicker.js';
import paleteReducer from './palete.js';
import saturateReducer from './saturate.js';
import mixerReducer from './mixer.js';

const allReducers = combineReducers({
	colorpicker: colorpickerReducer,
	palete: paleteReducer,
	saturate: saturateReducer,
	mixer: mixerReducer
});

export default allReducers;