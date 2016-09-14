import Immutable from 'immutable';
import { validateSelectedColors, validateCurrentColor, validateLanguage, validateFormat, validateVariablesNames} from '@colorizr/utils/validator';
import {DEFAULT_CURRENT_COLOR, MAX_SELECTED_COLORS} from '@colorizr/config';
import * as CONST from "@colorizr/config/constants";

export const getSavedData = () => {
	const colors = Immutable.OrderedSet(loadSelectedColors());
	const currentColor = loadCurrentColor();
	const language = loadLanguage();
	const format = loadFormat();
	const variablesNames = Immutable.List(loadVariablesNames());

	return {
		colorpicker: Immutable.Map({ color: currentColor }),
		palete: Immutable.Map({ colors }),
		export: Immutable.Map({ language, format, variablesNames })
	}
}

const loadCurrentColor = () => {
	try {
		const currentColor = localStorage.getItem('currentColor');

		if (!validateCurrentColor(currentColor)) {
			return DEFAULT_CURRENT_COLOR;
		}

		return currentColor;
	} catch (e) {
		console.error(e);
		return DEFAULT_CURRENT_COLOR;
	}
}

const loadSelectedColors = () => {
	try {
		const serialized = localStorage.getItem('selectedColors');
		
		if (serialized === null) {
			return undefined;
		}

		const selectedColors = JSON.parse(serialized);
		if (!validateSelectedColors(selectedColors)) {
			return undefined
		}

		return selectedColors;
	} catch (e) {
		console.error(e);
		return undefined;
	}
}

const loadLanguage = () => {
	try {
		const language = parseInt(localStorage.getItem('language'));

		if (!validateLanguage(language)) {
			return CONST.LANGUAGE_SASS;
		}

		return language;
	} catch (e) {
		console.error(e);
		return CONST.LANGUAGE_SASS;
	}
}

const loadFormat = () => {
	try {
		const format = parseInt(localStorage.getItem('format'));

		if (!validateFormat(format)) {
			return CONST.FORMAT_HEX;
		}

		return format;
	} catch (e) {
		console.error(e);
		return CONST.FORMAT_HEX;
	}
}

const loadVariablesNames = () => {
	let varNamessArray = Immutable.List();
	for (var i = 0 ; i < MAX_SELECTED_COLORS; i++) {
		varNamessArray = varNamessArray.push(`color_${i}`)
	}
	try {
		const serialized = localStorage.getItem('variablesNames');
		
		if (serialized === null) {
			return varNamessArray;
		}

		const variablesNames = JSON.parse(serialized);
		if (!validateVariablesNames(variablesNames)) {
			return varNamessArray
		}

		return variablesNames;
	} catch (e) {
		console.error(e);
		return varNamessArray;
	}
}