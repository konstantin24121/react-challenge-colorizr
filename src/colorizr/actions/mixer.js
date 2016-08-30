import * as actionTypes from './actionTypes';

export const changeMixColor = (currentColor, mixcolor) => {
	return {
		type: actionTypes.CHANGE_MIX_COLOR,
		payload: {currentColor, mixcolor}
	}
}

export const initMixed = (color) => {
	return {
		type: actionTypes.INIT_MIXER,
		payload: color
	}
}