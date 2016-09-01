import React from 'react';
import './style.scss';

export default class Spiner extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let style = {
			width: this.props.scale,
			height: this.props.scale
		};
		return (
			<div>
				<div className={`spinner ${this.props.isActive ? 'is-active': null }`} style={style}></div>
			</div>
		);
	}
}
