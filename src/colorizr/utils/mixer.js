import tinycolor from 'tinycolor2';
import {createPalite} from './saturator';

export const mixColor = function(color, mixColor){
	let _arr =  createPalite(color);
	let _mixedArray = [];

	for (let i =  0; i < _arr.length; i++) {
		_mixedArray.push(tinycolor.mix(mixColor, _arr[i], 50).toString())
	}
	return _mixedArray;
} 
