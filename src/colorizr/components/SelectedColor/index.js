import React from 'react';
import {Icon} from 'react-fa';
import {MAX_SELECTED_COLORS} from '@colorizr/config';
import {isDark} from '@colorizr/utils/isDark';
import {saveSelectedColors} from '@colorizr/utils/dataSaver';
// import 'react-fastclick';
import '@colorizr/components/Palete/style.scss';
import './style.scss';

export default class Palete extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillReceiveProps(nextProps) {
		if( !nextProps.colors.equals(this.props.colors) ){
			saveSelectedColors(nextProps.colors);
			console.log('Save selected color');
		}
	}

	//render selected palete
	renderPalete(){
		let paleteItem = [];
		let selectedColors = this.props.colors;
		let key = 0;

		//at start render selected colors
		selectedColors.forEach( (color) => {
			paleteItem.push( 
				<li key={key++} 
					className={`palete__item ${isDark(color) ? '_dark' : '_light'}`} 
					style={{backgroundColor: color}} 
					title={color}
					onClick={this.props.removeColorFromPalete.bind(null, color)}
				>
					<Icon className='palete__item-icon' name="plus" rotate='45'/>
				</li>
			);
		})

		//and if selected colors number less than max allowed 
		//add empty items
		for (key; key < MAX_SELECTED_COLORS; key++) {
			paleteItem.push( <li key={key} className="palete__item _empty" title="No color yet"></li> )
		}
		return paleteItem;
	}

	render() {

		return (
			<div className="samples">
				<div className="samples__box panel">
					<h2 className="samples__title">Select up to ten colors</h2>
					<h4	className="samples__descr">Select Colors by clicking on them</h4>
					<div className="palete">
						<ul className="palete__set">
							{this.renderPalete()}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
