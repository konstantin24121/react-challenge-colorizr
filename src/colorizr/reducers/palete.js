import Immutable from 'immutable';
import * as actionTypes from "@colorizr/actions";
import {MAX_SELECTED_COLORS} from '@colorizr/config';

const initialState = Immutable.Map({
	colors: Immutable.OrderedSet(['#ffddee'])
});

export default function(state = initialState, action){
	switch (action.type){
		case actionTypes.ADD_COLOR: {
			return state.update('colors', s => (
                s.size < MAX_SELECTED_COLORS ?
                    s.add(action.payload) :
                    s.rest().add(action.payload)
            ));
		}
		case actionTypes.REMOVE_COLOR: {
			return state.update('colors', s => (
                s.delete(action.payload)
            ));
		}
		case actionTypes.BULK_REMOVE: {
			return state.update('colors', s => (
                s.subtract(action.payload)
            ));
		}
		case actionTypes.BULK_INSERT: {
			return state.update('colors', s => (
                s.concat(action.payload).takeLast(MAX_SELECTED_COLORS)
            ));
		}
		default:
			return state;
	}
}