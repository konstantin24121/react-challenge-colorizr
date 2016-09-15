import * as actionTypes from './actionTypes.js'

export function fetchShemesIfNeeded() {
	return (dispatch, getState) => {
		if( shouldDataFetching(getState()) ){
			return dispatch( fetchSchemes() )
		}

		return Promise.resolve();
	}
}

function fetchFromServer() {
	return fetch('/colors.json').then(
		function(result) {
			return result.json()
		});
}

function fetchSchemes() {

	return dispatch => {
		dispatch({
			type: actionTypes.SCHEMES_FETCH_START
		});
		fetchFromServer().then(function(response) {
			dispatch({
				type: actionTypes.SCHEMES_FETCH_SUCCESS,
				payload: response.schemes
			});
		}).catch(function(error){
			console.log(error);
			dispatch({
				type: actionTypes.SCHEMES_FETCH_ERROR
			});
		})
	}
}

function shouldDataFetching(state) {
	return state.schemes.get('schemes').size === 0;
}