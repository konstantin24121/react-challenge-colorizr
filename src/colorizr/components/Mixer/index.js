import React from 'react';
import DocumentEvents from 'react-document-events';
import ColorPicker from 'react-color-picker';
import './style.scss';

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

	toogleHandler = (e) => {
		console.log(e);
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
					<ColorPicker value={this.props.color} onDrag={::this.onDrag} />
				</div>
				<DocumentEvents enabled={!this.state.hidden} onClick={this.toogleHandler} />
			</span>
		);
	}
}
