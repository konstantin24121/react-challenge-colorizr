import * as actionTypes from './actionTypes.js';

export function fetchDataIfNeeded() {
	return (dispatch, getState) => {
		if (shouldDataFetching(getState())) {
			return dispatch(fetchPresets());
		}

		return Promise.resolve();
	};
}

function fetchFromServer() {
	return fetch('/colors.json').then(
		function(result) {
			return result.json()
		});
}

function fetchPresets() {

	return dispatch => {
		dispatch({
			type: actionTypes.FETCH_START
		});
		fetchFromServer().then(function(response) {
			dispatch({
				type: actionTypes.FETCH_SUCCESS,
				payload: response.presets
			});
		}).catch(function(error){
			console.log(error);
			dispatch({
				type: actionTypes.FETCH_ERROR
			});
		})
	}
}

function shouldDataFetching(state) {
	return state.presets.get('presets').size === 0;
}
