import {combineReducers} from 'redux';

import colorpickerReducer from './colorpicker.js';
import paleteReducer from './palete.js';
import saturateReducer from './saturate.js';
import mixerReducer from './mixer.js';
import presetsReducer from './presets.js';

const allReducers = combineReducers({
	colorpicker: colorpickerReducer,
	palete: paleteReducer,
	saturate: saturateReducer,
	mixer: mixerReducer,
	presets: presetsReducer,
});

export default allReducers;