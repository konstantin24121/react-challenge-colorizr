import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {Icon} from 'react-fa';
import {isDark} from '@colorizr/utils/isDark';

import './style.scss';

export default class Preset extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let {name, colors, removeColorFromPalete, addColorToPalete, selectedColors} = this.props;
		let presetList = colors.map( (color, key) => {
			let _selected = selectedColors.has(color);
			return (
				<li key={key} 
					className={`preset__item ${_selected ? 'is-selected' : ''}`}
					onClick = {!_selected ? addColorToPalete.bind(null, color) : removeColorFromPalete.bind(null, color)}
				>
					<div className={`preset__item-sample ${isDark(color) ? 'is-dark' : 'is-light'}`} style={{backgroundColor: color}}>
						<Icon name='plus' className="preset__item-icon" rotate={_selected ? '45' : null}/>
					</div>
					<div className="preset__item-value">{color}</div>
				</li>
			)
		} )
		return (
			<div className="preset">
				<Row>
					<Col xs={12}>
						<h3 className="preset__title">{name}</h3>
					</Col>
				</Row>
				<Row>
					<ul className="preset__list">
						{presetList}
					</ul>
				</Row>
			</div>
		);
	}
}
