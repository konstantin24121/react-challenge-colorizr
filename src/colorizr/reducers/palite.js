let _arr = [];
for (var i = 9; i >= 0; i--) {
	_arr.push('');
}
const initialState = {
	colors: _arr
};

export default function(state = initialState, action){
	switch (action.type){
		case 'ADD_COLOR': 
			return { ...state, color: action.payload }
		default:
			return state;
	}
}