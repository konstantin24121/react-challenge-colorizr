
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ColorPicker from 'react-color-picker';
import {changeGlobalColor} from '@colorizr/actions/colorpicker';
import tinycolor from 'tinycolor2';

import "./style.scss";
import 'react-color-picker/index.css';

class Colorpicker extends React.Component {
	constructor(props){
		super(props);
	}
	onDrag(color) {
		this.props.changeGlobalColor(color);
	}

	checkLightness(color){
		let _color = tinycolor(color);
		if( _color.isDark() ){
			return '_light'
		}
		return '_dark'
	}

	render() {
		let titleMod = this.checkLightness(this.props.color);
		return (
			<div className="colorpicker">
				<h1 className={`colorpicker__title ${titleMod}`}>Choose your color</h1>
				<div className="colorpicker__box">
					<ColorPicker value={this.props.color} onDrag={::this.onDrag} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		colorpicker: state.colorpicker
	};
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({
		changeGlobalColor: changeGlobalColor
	}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(Colorpicker)
