import React from 'react';
import {Button} from 'react-bootstrap';
import {Icon} from 'react-fa';
import {isDark} from '@colorizr/utils/isDark';

import './style.scss';

export default class SaturationPalete extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			lightBg: true
		}
	}
	changeBackground(){
		this.setState({...this.state, lightBg: !this.state.lightBg})
	}

	renderPalete(){
		const colors = this.props.palete;
		const selectedColors = this.props.selectedPalete;
		let _palete = [];

		colors.forEach( (color, i) => {
			let _selected = selectedColors.has(color);
			_palete.push(
				<li key={i} 
					className={`palete__item ${_selected ? '_active':''} ${isDark(color) ? '_dark' : '_light'}`} 
					style={{backgroundColor: color}} 
					title={color}
					onClick = {!_selected ? this.props.addColorToPalete.bind(null, color) : this.props.removeColorFromPalete.bind(null, color)}
				>
					<Icon className="palete__item-icon" name="plus" rotate={_selected ? '45' : null} />
				</li>
			)
		} );
		return _palete;
	}

	renderButtons(){
		const {lightBg} = this.state;
		const colors = this.props.palete;
		const selectedColors = this.props.selectedPalete;

		let intersection = selectedColors.intersect(colors);

		const removeButton = intersection.size ?
			<Button bsStyle="danger" 
				className="palete__btn" 
				onClick={this.props.bulkRemoveFromPalete.bind(null, intersection)}
			>
				Remove All
			</Button> 
			: null;

		return (
			<div className="palete__tools">
				<Button className="palete__btn" onClick={::this.changeBackground}> {lightBg ? 'Dark' : 'Light'} background</Button>
				<Button className="palete__btn" onClick={this.props.bulkInsertToPalete.bind(null, colors)}>Select All</Button>
				{removeButton}
			</div>
		)
	}

	render() {
		const {lightBg} = this.state;

		return (
			<div className="palete">
				<ul className={`palete__set ${lightBg ? 'is-light' : 'is-dark'}`}>
					{this.renderPalete()}
				</ul>
				{this.renderButtons()}
			</div>
		);
	}
}