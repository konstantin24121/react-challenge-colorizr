
export function saveSelectedColors(colors) {
	try {
		const serialized = JSON.stringify(colors);
		localStorage.setItem('selectedColors', serialized);
	} catch (e) {
		console.error(e);
	}
}

export function saveCurrentColor(color) {
	try {
		localStorage.setItem('currentColor', color);
	} catch (e) {
		console.error(e);
	}
}

export function saveFormat(format) {
	try {
		localStorage.setItem('format', format);
	} catch (e) {
		console.error(e);
	}
}

export function saveLanguage(language) {
	try {
		localStorage.setItem('language', language);
	} catch (e) {
		console.error(e);
	}
}

export function saveVariablesNames(variablesNames) {
	try {
		const serialized = JSON.stringify(variablesNames);
		localStorage.setItem('variablesNames', serialized);
	} catch (e) {
		console.error(e);
	}
}