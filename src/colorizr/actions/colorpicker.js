import * as actionTypes from './actionTypes';

export const changeGlobalColor = (color) => {
	return {
		type: actionTypes.CHANGE_COLOR,
		payload: color
	}
}



