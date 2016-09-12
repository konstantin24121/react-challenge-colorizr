import Immutable from 'immutable';
import * as CONST from "@colorizr/constants";
import {MAX_SELECTED_COLORS} from '@colorizr/config';

import * as actionTypes from "@colorizr/actions";

let varLabelsArray = Immutable.List();
for (var i = 0 ; i < MAX_SELECTED_COLORS; i++) {
	varLabelsArray = varLabelsArray.push(`color_${i}`)
}

const initialState = Immutable.Map({
	language: CONST.LANGUAGE_SASS,
	format: CONST.FORMAT_HEX,
	variablesNames: varLabelsArray
})

export default function(state = initialState, action){
	switch (action.type){
		case actionTypes.CHANGE_FORMAT:
			return state.set('format', action.payload);
		case actionTypes.CHANGE_LANGUAGE:
			return state.set('language', action.payload);
		default:
			return state;
	}
}