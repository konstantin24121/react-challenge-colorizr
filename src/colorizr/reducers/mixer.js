import Immutable from 'immutable';
import {mixColor} from '@colorizr/utils/mixer';
import * as actionTypes from "@colorizr/actions";

const initialState = Immutable.Map({})

export default function(state = initialState, action){
	switch (action.type){
		case actionTypes.INIT_MIXER:
		case actionTypes.CHANGE_COLOR:
			return state.set('colors', mixColor(action.payload, state.get('mix')));
		case actionTypes.CHANGE_MIX_COLOR: 
			return state.merge({
				mix: action.payload.mixcolor,
				colors: mixColor(action.payload.currentColor, action.payload.mixcolor)
			});
		default:
			return state;
	}
}