const initialState = {
	color: 'orange'
};

export default function(state = initialState, action){
	switch (action.type){
		case 'CHANGE_COLOR': 
			return { ...state, color: action.payload }
		default:
			return state;
	}
}