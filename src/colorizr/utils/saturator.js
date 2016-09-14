import tinycolor from 'tinycolor2';
import {PALITE_NUMBER} from '@colorizr/config';

export const createPalite = function (curentColor){
	const paliteNumber = PALITE_NUMBER;
	let color = tinycolor(curentColor);
	let callback, _arr = [];

	if( color.isDark() ){
		callback = (color, i) => color.lighten(50 - 50 / paliteNumber * i).toString().toUpperCase()
	}else{
		callback = (color, i) => color.darken(50 / paliteNumber * i).toString().toUpperCase()
	}
	for (var i = paliteNumber - 1; i >= 0; i--) {
		let color = tinycolor(curentColor);
		let _color = callback(color, i);
		_arr.push( _color );
	}
	return _arr;
}