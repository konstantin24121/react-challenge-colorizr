import * as actionTypes from './actionTypes';

export const changeGlobalColor = (color) => {
	return {
		type: actionTypes.CHANGE_COLOR,
		payload: color
	}
}

export const initPalete = (color) => {
	return {
		type: actionTypes.INIT_PALETE,
		payload: color
	}
}

export const addColorToPalete = (color) => {
	return {
		type: actionTypes.ADD_COLOR,
		payload: color
	}
}

export const removeColorFromPalete = (color) => {
	return {
		type: actionTypes.REMOVE_COLOR,
		payload: color
	}
}

export const bulkRemoveFromPalete = (colors) => {
	return {
		type: actionTypes.BULK_REMOVE,
		payload: colors
	}
}

export const bulkInsertToPalete = (colors) => {
	return {
		type: actionTypes.BULK_INSERT,
		payload: colors
	}
}