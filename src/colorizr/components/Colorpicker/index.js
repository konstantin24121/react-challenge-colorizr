
import React from 'react';
import ColorPicker from 'react-color-picker';
import "./style.scss";
import 'react-color-picker/index.css';

export default class Colorpicker extends React.Component {
	constructor(props) {
		super(props);
	}

	onDrag(color) {
		console.log(color);
	}

	render() {
		return (
			<div className="colorpicker">
				<h1 className="colorpicker__title">Choose your color</h1>
				<div className="colorpicket__box">
					<ColorPicker value={'red'} onDrag={::this.onDrag} />
				</div>
			</div>
		);
	}
}
