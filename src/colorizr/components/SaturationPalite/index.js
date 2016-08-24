import React from 'react';
import {Button} from 'react-bootstrap';
import tinycolor from 'tinycolor2';

import '@colorizr/components/Palite/style.scss';
import './style.scss';

export default class SaturationPalite extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			lightBg: true
		}
	}
	changeBackground(){
		this.setState({...this.state, lightBg: !this.state.lightBg})
	}
	createPalite(){
		const paliteNumber = 10;
		let color = tinycolor(this.props.color);
		let callback, _arr = [];

		if( color.isDark() ){
			callback = (color, i) => color.lighten(50 - 50 / paliteNumber * i).toString()
		}else{
			callback = (color, i) => color.darken(50 / paliteNumber * i).toString()
		}
		for (var i = paliteNumber - 1; i >= 0; i--) {
			let color = tinycolor(this.props.color);
			let _color = callback(color, i);
			console.log(_color);
			_arr.push( <li key={i} className="palite__set-item" style={{backgroundColor: _color}}></li> );
		}
		return _arr
	}
	render() {
		
		let {lightBg} = this.state;
		
		let Colors = this.createPalite();

		return (
			<div className="palite _saturation">
				<div className="palite__box panel">
					<h2 className="palite__title">Darker and Lighter</h2>
					<ul className={`palite__set ${lightBg ? 'is-light' : 'is-dark'}`}>
						{Colors}
					</ul>
					<div className="palite__tools">
						<Button className="palite__btn" onClick={::this.changeBackground}> {lightBg ? 'Dark' : 'Light'} background</Button>
						<Button className="palite__btn">Select All</Button>
					</div>
				</div>
			</div>
		);
	}
}