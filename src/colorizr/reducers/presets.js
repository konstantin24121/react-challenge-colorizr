import Immutable from 'immutable';
import * as actionTypes from "@colorizr/actions";

const initialState = Immutable.Map({
	presets: Immutable.List(),
	isFetching: false
});

export default function(state = initialState, action){
	switch(action.type){
		case actionTypes.FETCH_START:
			return state.set('isFetching', true)

		case actionTypes.FETCH_SUCCESS:
			return state.merge({
				'presets': Immutable.Map(action.payload),
				'isFetching': false
			})

		case actionTypes.FETCH_ERROR:
			return state.set('isFetching', false)
			
		default: 
			return state;
	}
}