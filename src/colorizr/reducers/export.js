import Immutable from 'immutable';

import * as actionTypes from "@colorizr/actions";

const initialState = Immutable.Map({})

export default function(state = initialState, action){
	switch (action.type){
		case actionTypes.CHANGE_FORMAT:
			return state.set('format', action.payload);

		case actionTypes.CHANGE_LANGUAGE:
			return state.set('language', action.payload);

		case actionTypes.CHANGE_VALUE_NAME:
			return state.setIn(['variablesNames', action.payload.key] , action.payload.value);
			
		default:
			return state;
	}
}