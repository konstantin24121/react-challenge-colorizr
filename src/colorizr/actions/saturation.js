import * as actionTypes from './actionTypes';

export const initSaturation = (color) => {
	return {
		type: actionTypes.INIT_SATURATION,
		payload: color
	}
}