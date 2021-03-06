import Immutable from 'immutable';


import * as actionTypes from "@colorizr/actions";

const initialState = Immutable.Map({});

export default function(state = initialState, action){
	switch (action.type){
		case actionTypes.CHANGE_COLOR: {
			return state.set('color', action.payload)
		}
		default:
			return state;
	}
}