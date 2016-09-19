import React from 'react';
import ColorPicker from 'react-color-picker';
import { isDark } from '@colorizr/utils/isDark';
import ResponsiveMixin from 'react-responsive-mixin';
import reactMixin from 'react-mixin';

import "./style.scss";
import 'react-color-picker/index.css';

@reactMixin.decorate(ResponsiveMixin)
export default class Colorpicker extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			saturationWidth: 210
		}
	}
	onDrag(color) {
		this.props.changeGlobalColor(color);
	}

	componentWillMount() {
		this.props.initSaturation(this.props.color);
		this.props.initMixed(this.props.color, this.props.mixcolor);
	}

	componentDidMount() {
		this.media({ maxWidth: 554 }, () => {
			this.setState({
				saturationWidth: 210
			})
		});

		this.media({ minWidth: 555, maxWidth: 768 }, () => {
			this.setState({
				saturationWidth: 300
			})
		});
		this.media({ minWidth: 767}, () => {
			this.setState({
				saturationWidth: 320
			})
		});
	}

	render() {
		let { color } = this.props;
		return (
			<div className="colorpicker">
				<h1 className={`colorpicker__title ${isDark(color)? '_light' : '_dark'}`}>Choose your color</h1>
				<div className="colorpicker__box">
					<ColorPicker value={color} onDrag={::this.onDrag} saturationWidth={this.state.saturationWidth} saturationHeight={300} hueWidth={30} />
				</div>
			</div>
		);
	}
}
