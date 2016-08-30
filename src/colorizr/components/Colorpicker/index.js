import React from 'react';
import ColorPicker from 'react-color-picker';
import {isDark} from '@colorizr/utils/isDark';

import "./style.scss";
import 'react-color-picker/index.css';

export default class Colorpicker extends React.Component {
	constructor(props){
		super(props);
	}
	onDrag(color) {
		this.props.changeGlobalColor(color);
	}

	componentWillMount() {
		this.props.initSaturation(this.props.color);
		this.props.initMixed(this.props.color, this.props.mixcolor);
	}

	render() {
		let {color} = this.props;
		return (
			<div className="colorpicker">
				<h1 className={`colorpicker__title ${isDark(color)? '_light' : '_dark'}`}>Choose your color</h1>
				<div className="colorpicker__box">
					<ColorPicker value={color} onDrag={::this.onDrag} />
				</div>
			</div>
		);
	}
}



