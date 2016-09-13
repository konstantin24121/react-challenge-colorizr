import * as actionTypes from './actionTypes';

export const changeFormat = (format) => {
	return {
		type: actionTypes.CHANGE_FORMAT,
		payload: format
	}
}

export const changeLanguage = (language) => {
	return {
		type: actionTypes.CHANGE_LANGUAGE,
		payload: language
	}
} 

export const changeValueName = (key, value) => {
	return {
		type: actionTypes.CHANGE_VALUE_NAME,
		payload: {key, value}
	}
} 
