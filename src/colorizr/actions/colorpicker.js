export const changeGlobalColor = (color) => {
	console.log("Your color is " + color );
	return {
		type: 'CHANGE_COLOR',
		payload: color
	}
}