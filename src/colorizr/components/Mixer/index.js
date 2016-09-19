import React from 'react';
import DocumentEvents from 'react-document-events';
import ColorPicker from 'react-color-picker';
import {saveMixColor} from '@colorizr/utils/dataSaver';
import ResponsiveMixin from 'react-responsive-mixin';
import reactMixin from 'react-mixin';

import './style.scss';

@reactMixin.decorate(ResponsiveMixin)
export default class Mixer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true
		}
	}

	tooglePicker(){
		this.setState({
			hidden: !this.state.hidden
		})
	}

	componentWillReceiveProps(nextProps) {
		if( nextProps.color !== this.props.color){
			saveMixColor(nextProps.color);
			console.log('Save mix color');
		}
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

	toogleHandler = (e) => {
		this.tooglePicker();
	}

	onDrag(color){
		this.props.onDrag(this.props.currentColor, color)
	}

	render() {
		return (
			<span className={`mix ${this.state.hidden ? '_hidden' : ''} `}>
				<div className="mix__sample" style={{backgroundColor: this.props.color}} onClick={::this.tooglePicker}></div>
				<div className="mix__picker">
					<ColorPicker value={this.props.color} onDrag={::this.onDrag} saturationWidth={this.state.saturationWidth} saturationHeight={300} hueWidth={30}/>
				</div>
				<DocumentEvents enabled={!this.state.hidden} onClick={this.toogleHandler} />
			</span>
		);
	}
}
