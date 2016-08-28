import tinycolor from 'tinycolor2';

export const isDark = (color)=>{
	let _color = tinycolor(color);
	return _color.isDark();
}