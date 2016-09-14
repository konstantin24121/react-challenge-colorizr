import React from 'react';
import {Button} from 'react-bootstrap';
import {saveCurrentColor} from '@colorizr/utils/dataSaver';

import './style.scss';

export default class CurrentColor extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		if( nextProps.currentColor !== this.props.currentColor){
			saveCurrentColor(nextProps.currentColor);
			console.log('Save current color');
		}
	}

	render() {
		let { currentColor, selectedColors, removeColorFromPalete, addColorToPalete } = this.props;
		let isActive = selectedColors.has(currentColor);

		let _btn = isActive 
			? <Button bsStyle="danger" onClick={ removeColorFromPalete.bind(null, currentColor) }>Remove current color from palete</Button>
			: <Button bsStyle="success" onClick={ addColorToPalete.bind(null, currentColor) }>Add current color to palete</Button>;

		return (
			<div>
				<div className="current-color">
					{_btn}
				</div>
			</div>
		);
	}
}
