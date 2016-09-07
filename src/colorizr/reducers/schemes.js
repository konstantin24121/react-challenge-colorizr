import Immutable from 'immutable';
import * as actionTypes from "@colorizr/actions";

const initialState = Immutable.Map({
	schemes: Immutable.Map(),
	isFetching: false
});

export default function(state = initialState, action){
	switch(action.type){
		case actionTypes.SCHEMES_FETCH_START:
			return state.set('isFetching', true)

		case actionTypes.SCHEMES_FETCH_SUCCESS:{
			console.log(action.payload)
			return state.merge({
				'schemes': Immutable.Map(action.payload),
				'isFetching': false
			})
		}

		case actionTypes.SCHEMES_FETCH_ERROR:
			return state.set('isFetching', false)
			
		default: 
			return state;
	}
}