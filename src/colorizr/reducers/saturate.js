import Immutable from 'immutable';

import {createPalite} from '@colorizr/utils/saturator';

const initialState = Immutable.Map({
	colors: Immutable.List()
});

export default function(state = initialState, action){
	switch (action.type){
		case 'INIT_PALETE':
		case 'CHANGE_COLOR':{
			return state.set('colors', Immutable.List(createPalite(action.payload)))
		} 
		default:
			return state;
	}
}