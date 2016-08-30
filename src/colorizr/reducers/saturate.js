import Immutable from 'immutable';
import * as actionTypes from "@colorizr/actions";
import {createPalite} from '@colorizr/utils/saturator';

const initialState = Immutable.Map({
	colors: Immutable.List()
});

export default function(state = initialState, action){
	switch (action.type){
		case actionTypes.INIT_SATURATION:
		case actionTypes.CHANGE_COLOR:{
			return state.set('colors', Immutable.List(createPalite(action.payload)))
		} 
		default:
			return state;
	}
}