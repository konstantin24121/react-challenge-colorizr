import {MAX_SELECTED_COLORS} from '@colorizr/config';
import * as CONST from "@colorizr/config/constants";
import tinycolor from "tinycolor2";

function validateColor(color) {
	return tinycolor(color).isValid();
}

export function validateCurrentColor(color){
	if (color === null) {
		return false;
	}
	return validateColor(color)
}

export function validateSelectedColors(colors) {
	if (!Array.isArray(colors)) {
		return false;
	}

	if (colors.length > MAX_SELECTED_COLORS) {
		return false;
	}

	if (!colors.every(c => validateColor(c))) {
		return false;
	}

	return true;
}

export function validateVariablesNames(variablesNames) {
	if (!Array.isArray(variablesNames)) {
		return false;
	}

	if (variablesNames.length > MAX_SELECTED_COLORS) {
		return false;
	}

	return true;
}

export function validateLanguage(language) {
	if (language === null) {
		return false;
	}
	return CONST.LANGUAGE_ARRAY.indexOf(language) !== -1
}

export function validateFormat(format) {
	if (format === null) {
		return false;
	}
	return CONST.FORMAT_ARRAY.indexOf(format) !== -1
}