import * as actionTypes from './actionTypes';

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